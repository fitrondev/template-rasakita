import Image from "next/image";

import { Flame } from "lucide-react";

import { IMenuItem } from "@/constants/data";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MenuCardProps {
  item: IMenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group gap-4 overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {item.isPopular && (
            <Badge variant="destructive" className="bg-red-500">
              Popular
            </Badge>
          )}
          {item.isSpicy && (
            <Badge
              variant="outline"
              className="border-orange-300 bg-orange-100 text-orange-600"
            >
              <Flame className="mr-1 h-3 w-3" />
              Pedas
            </Badge>
          )}
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="group-hover:text-primary text-lg font-semibold transition-colors">
            {item.name}
          </CardTitle>
          <span className="text-primary text-lg font-bold">
            {formatPrice(item.price)}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
