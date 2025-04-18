export interface Payment {
  id: string
  tenantId: string
  propertyId: string
  amount: number
  dueDate: Date
  paymentDate?: Date
  status: "pending" | "paid" | "overdue"
  type: "rent" | "deposit" | "fee"
  description?: string
  createdAt: Date
  updatedAt: Date
}
