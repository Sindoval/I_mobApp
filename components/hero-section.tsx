import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Gestão de Imóveis Simplificada
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Gerencie seus imóveis e inquilinos de forma simples e eficiente. Tudo em um só lugar, acessível para
              todos.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/cadastro">
                <Building className="mr-2 h-5 w-5" />
                Cadastrar Imóvel
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">Acessar Conta</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
