import { Building, Users, FileText, Calendar, Camera, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Recursos Principais</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Tudo o que você precisa para gerenciar seus imóveis e inquilinos de forma eficiente.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Card>
            <CardHeader className="pb-2">
              <Building className="h-6 w-6 text-teal-600 mb-2" />
              <CardTitle>Cadastro de Imóveis</CardTitle>
              <CardDescription>Cadastre seus imóveis com todas as informações necessárias.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Adicione endereço, características, fotos e documentos de cada imóvel de forma organizada.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="h-6 w-6 text-teal-600 mb-2" />
              <CardTitle>Gestão de Inquilinos</CardTitle>
              <CardDescription>Vincule inquilinos aos imóveis e gerencie contratos.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Mantenha os dados dos inquilinos atualizados e acompanhe o histórico de ocupação dos imóveis.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <FileText className="h-6 w-6 text-teal-600 mb-2" />
              <CardTitle>Boletos de Pagamento</CardTitle>
              <CardDescription>Gere e imprima boletos de pagamento para os inquilinos.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Facilite o processo de pagamento com boletos automáticos e controle de recebimentos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Calendar className="h-6 w-6 text-teal-600 mb-2" />
              <CardTitle>Agendamento de Visitas</CardTitle>
              <CardDescription>Agende visitas aos imóveis de forma prática.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Organize visitas para potenciais inquilinos e mantenha um calendário de compromissos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Camera className="h-6 w-6 text-teal-600 mb-2" />
              <CardTitle>Galeria de Fotos</CardTitle>
              <CardDescription>Adicione fotos detalhadas de cada imóvel.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Mantenha um registro visual completo dos seus imóveis para facilitar a divulgação.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Shield className="h-6 w-6 text-teal-600 mb-2" />
              <CardTitle>Segurança e Privacidade</CardTitle>
              <CardDescription>Seus dados estão protegidos com as melhores práticas de segurança.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Controle de acesso, autenticação segura e proteção de dados pessoais e financeiros.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
