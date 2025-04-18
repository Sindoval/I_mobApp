import type { Property } from "@/types/property"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, Car, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const statusColors = {
    available: "bg-green-100 text-green-800",
    rented: "bg-blue-100 text-blue-800",
    sold: "bg-gray-100 text-gray-800",
  }

  const statusText = {
    available: "Disponível",
    rented: "Alugado",
    sold: "Vendido",
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48">
        <Image
          src={property.images[0] || "/placeholder.svg?height=200&width=400"}
          alt={property.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className={`${statusColors[property.status]} font-medium border-none`}>
            {statusText[property.status]}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span className="line-clamp-1">
              {property.address.neighborhood}, {property.address.city}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1 text-gray-400" />
            <span>{property.features.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1 text-gray-400" />
            <span>{property.features.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1 text-gray-400" />
            <span>{property.features.area}m²</span>
          </div>
          {property.features.hasGarage && (
            <div className="flex items-center">
              <Car className="h-4 w-4 mr-1 text-gray-400" />
              <span>{property.features.parkingSpaces || 1}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="font-bold text-lg">R$ {property.price.toLocaleString("pt-BR")}</div>
        <Link href={`/imoveis/${property.id}`} className="text-sm font-medium text-teal-600 hover:text-teal-700">
          Ver detalhes
        </Link>
      </CardFooter>
    </Card>
  )
}
