import { Star } from "lucide-react";

import { ITestimonial } from "@/constants/data";

import Avatar from "@/components/common/Avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: ITestimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, role, content, rating, avatar } = testimonial;

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={cn(
          "h-4 w-4",
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        )}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar
              src={avatar}
              alt={`${name} avatar`}
              fallback={getInitials(name)}
              size="md"
            />
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-muted-foreground text-sm">{role}</p>
            </div>
          </div>

          <div className="flex items-center space-x-1">{renderStars()}</div>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="leading-relaxed italic">
          &quot;{content}&quot;
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
