import {
  Avatar as AvatarCn,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Avatar = ({
  src,
  alt,
  fallback,
  className,
  size = "md",
}: AvatarProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <AvatarCn className={cn(sizeClasses[size], className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarCn>
  );
};

export default Avatar;
