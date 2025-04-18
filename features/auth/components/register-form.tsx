"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Loader2 } from "lucide-react"

// Schema simplificado para evitar problemas com refine
const registerSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Digite um e-mail válido" }),
  password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
  confirmPassword: z.string().min(6, { message: "A confirmação de senha é obrigatória" }),
  terms: z.boolean(),
})

type RegisterFormValues = z.infer<typeof registerSchema>

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [passwordError, setPasswordError] = useState("")
  const [termsError, setTermsError] = useState("")

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  })

  function onSubmit(data: RegisterFormValues) {
    // Validações manuais
    let hasError = false

    if (data.password !== data.confirmPassword) {
      setPasswordError("As senhas não coincidem")
      hasError = true
    } else {
      setPasswordError("")
    }

    if (!data.terms) {
      setTermsError("Você deve aceitar os termos e condições")
      hasError = true
    } else {
      setTermsError("")
    }

    if (hasError) return

    setIsLoading(true)
    // Simulando uma chamada de API
    console.log(data)
    setTimeout(() => {
      setIsLoading(false)
      // Aqui seria redirecionado para a dashboard após cadastro
    }, 1500)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome completo" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="seu@email.com" type="email" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input placeholder="••••••••" type="password" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar senha</FormLabel>
              <FormControl>
                <Input placeholder="••••••••" type="password" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
              {passwordError && <p className="text-sm font-medium text-red-500 mt-1">{passwordError}</p>}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked === true)
                    if (checked) setTermsError("")
                  }}
                  disabled={isLoading}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal">
                  Eu concordo com os{" "}
                  <Link
                    href="/termos"
                    className="font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    termos de serviço
                  </Link>{" "}
                  e{" "}
                  <Link
                    href="/privacidade"
                    className="font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    política de privacidade
                  </Link>
                </FormLabel>
                {termsError && <p className="text-sm font-medium text-red-500 mt-1">{termsError}</p>}
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Cadastrando...
            </>
          ) : (
            "Criar conta"
          )}
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-500 dark:text-gray-400">Já tem uma conta?</span>{" "}
          <Link
            href="/login"
            className="font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
          >
            Faça login
          </Link>
        </div>
      </form>
    </Form>
  )
}
