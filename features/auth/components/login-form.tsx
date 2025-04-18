"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Loader2 } from "lucide-react"

const loginSchema = z.object({
  email: z.string().min(1, { message: "O e-mail é obrigatório" }).email({ message: "Digite um e-mail válido" }),
  password: z
    .string()
    .min(1, { message: "A senha é obrigatória" })
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
  rememberMe: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  function onSubmit(data: LoginFormValues) {
    setIsLoading(true)
    // Simulando uma chamada de API
    console.log(data)
    setTimeout(() => {
      setIsLoading(false)
      // Aqui seria redirecionado para a dashboard após login
    }, 1500)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="seu@email.com" type="email" autoComplete="email" disabled={isLoading} {...field} />
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
              <div className="flex items-center justify-between">
                <FormLabel>Senha</FormLabel>
                <Link href="/recuperar-senha" className="text-sm font-medium text-teal-600 hover:text-teal-700">
                  Esqueceu a senha?
                </Link>
              </div>
              <FormControl>
                <Input
                  placeholder="••••••••"
                  type="password"
                  autoComplete="current-password"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} disabled={isLoading} />
              </FormControl>
              <FormLabel className="text-sm font-normal">Lembrar de mim</FormLabel>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Entrando...
            </>
          ) : (
            "Entrar"
          )}
        </Button>
        <div className="text-center text-sm">
          <span className="text-gray-500">Não tem uma conta?</span>{" "}
          <Link href="/cadastro" className="font-medium text-teal-600 hover:text-teal-700">
            Cadastre-se
          </Link>
        </div>
      </form>
    </Form>
  )
}
