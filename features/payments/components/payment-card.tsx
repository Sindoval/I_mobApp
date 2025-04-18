"use client"

import type { Payment } from "@/types/payment"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaymentCardProps {
  payment: Payment
  onPrintBoleto?: (payment: Payment) => void
}

export function PaymentCard({ payment, onPrintBoleto }: PaymentCardProps) {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    paid: "bg-green-100 text-green-800",
    overdue: "bg-red-100 text-red-800",
  }

  const statusText = {
    pending: "Pendente",
    paid: "Pago",
    overdue: "Atrasado",
  }

  const typeText = {
    rent: "Aluguel",
    deposit: "Caução",
    fee: "Taxa",
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="bg-teal-100 p-2 rounded-full mr-3">
              <DollarSign className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <h3 className="font-semibold">
                {typeText[payment.type]} {payment.description ? `- ${payment.description}` : ""}
              </h3>
              <p className="text-sm text-gray-500">R$ {payment.amount.toLocaleString("pt-BR")}</p>
            </div>
          </div>
          <Badge className={`${statusColors[payment.status]} font-medium border-none`}>
            {statusText[payment.status]}
          </Badge>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-gray-500 mr-1">Vencimento:</span>
            <span>{new Date(payment.dueDate).toLocaleDateString("pt-BR")}</span>
          </div>
          {payment.paymentDate && (
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-gray-500 mr-1">Data de pagamento:</span>
              <span>{new Date(payment.paymentDate).toLocaleDateString("pt-BR")}</span>
            </div>
          )}
        </div>

        {payment.status !== "paid" && onPrintBoleto && (
          <div className="mt-4">
            <Button variant="outline" size="sm" className="w-full" onClick={() => onPrintBoleto(payment)}>
              <FileText className="h-4 w-4 mr-2" />
              Imprimir Boleto
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
