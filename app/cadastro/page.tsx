import { RegisterForm } from "@/features/auth/components/register-form"
import Link from "next/link"
import { Building } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Building className="h-6 w-6 text-teal-600" />
          <span className="font-bold">ImobApp</span>
        </Link>
      </div>
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Criar uma conta</h1>
            <p className="text-sm text-gray-500 mt-2">Cadastre-se para começar a gerenciar seus imóveis</p>
          </div>
          <RegisterForm />
        </div>
      </main>
    </div>
  )
}
