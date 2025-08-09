import { IContactInfo } from "@/constants/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

interface ContactCardProps {
  contact: IContactInfo;
}

const ContactCard = ({ contact }: ContactCardProps) => {
  const { icon: Icon, title, value, description } = contact;

  return (
    <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="text-center">
        <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <Icon className="text-primary h-8 w-8" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-primary mb-2 text-lg font-medium">{value}</p>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
