import Link from "next/link";

import { navigationItems } from "@/constants/data";
import { cn } from "@/lib/utils";

type NavigationItem = {
  label: string;
  href: string;
};

type NavLinksProps = {
  items?: NavigationItem[];
  className?: string;
  linkClassName?: string;
  orientation?: "horizontal" | "vertical";
  spacing?: "sm" | "md" | "lg";
};

const NavLinks = ({
  items = navigationItems,
  className,
  linkClassName,
  orientation = "horizontal",
  spacing = "md",
}: NavLinksProps) => {
  const spacingClasses = {
    sm: orientation === "horizontal" ? "space-x-4" : "space-y-2",
    md: orientation === "horizontal" ? "space-x-8" : "space-y-4",
    lg: orientation === "horizontal" ? "space-x-12" : "space-y-6",
  };

  const orientationClasses = {
    horizontal: "flex items-center",
    vertical: "flex flex-col",
  };

  return (
    <nav
      className={cn(
        orientationClasses[orientation],
        spacingClasses[spacing],
        className
      )}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            linkClassName
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
