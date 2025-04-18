export interface Visit {
  id: string
  propertyId: string
  visitorName: string
  visitorEmail: string
  visitorPhone: string
  date: Date
  status: "scheduled" | "completed" | "cancelled"
  notes?: string
  createdAt: Date
  updatedAt: Date
}
