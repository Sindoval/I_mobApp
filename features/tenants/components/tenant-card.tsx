import type { Tenant } from "@/types/tenant"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"

interface TenantCardProps {
  tenant: Tenant
}

export function TenantCard({ tenant }: TenantCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-gray-100 text-gray-800",
  }

  const statusText = {
    active: "Ativo",
    inactive: "Inativo",
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="bg-teal-100 p-2 rounded-full mr-3">
              <User className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <h3 className="font-semibold">{tenant.name}</h3>
              <p className="text-sm text-gray-500">{tenant.email}</p>
            </div>
          </div>
          <Badge className={`${statusColors[tenant.status]} font-medium border-none`}>
            {statusText[tenant.status]}
          </Badge>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <span className="text-gray-500 w-24">Documento:</span>
            <span>{tenant.document}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-24">Telefone:</span>
            <span>{tenant.phone}</span>
          </div>
          {tenant.contractStartDate && (
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-gray-500 mr-1">Contrato:</span>
              <span>
                {new Date(tenant.contractStartDate).toLocaleDateString("pt-BR")} a{" "}
                {tenant.contractEndDate
                  ? new Date(tenant.contractEndDate).toLocaleDateString("pt-BR")
                  : "Indeterminado"}
              </span>
            </div>
          )}
          {tenant.rentValue && (
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-gray-500 mr-1">Aluguel:</span>
              <span>R$ {tenant.rentValue.toLocaleString("pt-BR")}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end">
        <Link href={`/inquilinos/${tenant.id}`} className="text-sm font-medium text-teal-600 hover:text-teal-700">
          Ver detalhes
        </Link>
      </CardFooter>
    </Card>
  )
}
