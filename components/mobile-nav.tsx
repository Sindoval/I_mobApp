"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Building, Menu, Home, Users, FileText, LogIn } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden flex w-full items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <Building className="h-6 w-6 text-teal-600" />
        <span className="font-bold">ImobApp</span>
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <div className="px-7">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
              <Building className="h-6 w-6 text-teal-600" />
              <span className="font-bold">ImobApp</span>
            </Link>
          </div>
          <nav className="flex flex-col gap-4 text-sm mt-8 px-7">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              <Home className="h-4 w-4" />
              <span>Início</span>
            </Link>
            <Link
              href="/imoveis"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              <Building className="h-4 w-4" />
              <span>Imóveis</span>
            </Link>
            <Link
              href="/inquilinos"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              <Users className="h-4 w-4" />
              <span>Inquilinos</span>
            </Link>
            <Link
              href="/pagamentos"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              <FileText className="h-4 w-4" />
              <span>Pagamentos</span>
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login" onClick={() => setOpen(false)}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Entrar
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/cadastro" onClick={() => setOpen(false)}>
                  Cadastrar
                </Link>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
