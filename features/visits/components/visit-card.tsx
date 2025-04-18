"use client"

import type { Visit } from "@/types/visit"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VisitCardProps {
  visit: Visit
  propertyTitle?: string
  onCancelVisit?: (visit: Visit) => void
  onCompleteVisit?: (visit: Visit) => void
}

export function VisitCard({ visit, propertyTitle, onCancelVisit, onCompleteVisit }: VisitCardProps) {
  const statusColors = {
    scheduled: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-gray-100 text-gray-800",
  }

  const statusText = {
    scheduled: "Agendada",
    completed: "Realizada",
    cancelled: "Cancelada",
  }

  const visitDate = new Date(visit.date)
  const formattedDate = visitDate.toLocaleDateString("pt-BR")
  const formattedTime = visitDate.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="bg-teal-100 p-2 rounded-full mr-3">
              <Calendar className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <h3 className="font-semibold">Visita {propertyTitle && `- ${propertyTitle}`}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>
                  {formattedDate} às {formattedTime}
                </span>
              </div>
            </div>
          </div>
          <Badge className={`${statusColors[visit.status]} font-medium border-none`}>{statusText[visit.status]}</Badge>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-gray-500 mr-1">Visitante:</span>
            <span>{visit.visitorName}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-24">Contato:</span>
            <span>{visit.visitorPhone}</span>
          </div>
          {visit.notes && (
            <div className="mt-2">
              <span className="text-gray-500 block mb-1">Observações:</span>
              <p className="text-sm">{visit.notes}</p>
            </div>
          )}
        </div>

        {visit.status === "scheduled" && (
          <div className="mt-4 flex gap-2">
            {onCompleteVisit && (
              <Button variant="default" size="sm" className="flex-1" onClick={() => onCompleteVisit(visit)}>
                Marcar como realizada
              </Button>
            )}
            {onCancelVisit && (
              <Button variant="outline" size="sm" className="flex-1" onClick={() => onCancelVisit(visit)}>
                Cancelar
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
