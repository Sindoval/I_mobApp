export interface Tenant {
  id: string
  name: string
  email: string
  phone: string
  document: string
  propertyId?: string
  contractStartDate?: Date
  contractEndDate?: Date
  rentValue?: number
  status: "active" | "inactive"
  createdAt: Date
  updatedAt: Date
}
