import { IFeature } from "@/constants/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureCardProps {
  feature: IFeature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const IconComponent = feature.icon;

  return (
    <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="text-center">
        <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <IconComponent className="text-primary h-8 w-8" />
        </div>
        <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
      </CardHeader>

      <CardContent className="text-center">
        <CardDescription className="leading-relaxed">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
