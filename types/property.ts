export interface Property {
  id: string
  title: string
  description: string
  address: {
    street: string
    number: string
    complement?: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
  features: {
    bedrooms: number
    bathrooms: number
    area: number
    hasGarage: boolean
    parkingSpaces?: number
  }
  price: number
  images: string[]
  ownerId: string
  status: "available" | "rented" | "sold"
  createdAt: Date
  updatedAt: Date
}
