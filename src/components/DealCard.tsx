import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DealCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  validUntil: string;
  badge?: string;
}

const DealCard = ({ title, description, price, image, validUntil, badge }: DealCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        {badge && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-bold px-3 py-1">
            {badge}
          </Badge>
        )}
      </div>
      <div className="p-4 bg-card">
        <h3 className="font-bold text-lg mb-1 text-card-foreground">{title}</h3>
        <p className="text-2xl font-bold text-primary mb-2">₹{price}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground mt-2">Valid until {validUntil}</p>
      </div>
    </Card>
  );
};

export default DealCard;
