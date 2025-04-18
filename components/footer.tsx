import Link from "next/link"
import { Building } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <Building className="h-5 w-5 text-teal-600 dark:text-teal-400" />
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 ImobApp. Todos os direitos reservados.</p>
        </div>
        <nav className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/termos" className="hover:underline">
            Termos de Uso
          </Link>
          <Link href="/privacidade" className="hover:underline">
            Política de Privacidade
          </Link>
          <Link href="/contato" className="hover:underline">
            Contato
          </Link>
        </nav>
      </div>
    </footer>
  )
}
