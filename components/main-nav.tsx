import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Building, Users, FileText, LogIn } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Building className="h-6 w-6 text-teal-600 dark:text-teal-400" />
        <span className="hidden font-bold sm:inline-block">ImobApp</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
          <div className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span>Início</span>
          </div>
        </Link>
        <Link href="/imoveis" className="transition-colors hover:text-foreground/80 text-foreground/60">
          <div className="flex items-center gap-1">
            <Building className="h-4 w-4" />
            <span>Imóveis</span>
          </div>
        </Link>
        <Link href="/inquilinos" className="transition-colors hover:text-foreground/80 text-foreground/60">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Inquilinos</span>
          </div>
        </Link>
        <Link href="/pagamentos" className="transition-colors hover:text-foreground/80 text-foreground/60">
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>Pagamentos</span>
          </div>
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        <Button variant="ghost" size="sm" asChild>
          <Link href="/login">
            <LogIn className="mr-2 h-4 w-4" />
            Entrar
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/cadastro">Cadastrar</Link>
        </Button>
      </div>
    </div>
  )
}
