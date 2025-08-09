import Link from "next/link";

import { AlignJustify } from "lucide-react";

import NavLinks from "@/components/layouts/Header/NavLinks";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <AlignJustify className="size-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="hidden space-y-4">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile navigation menu for Rasa Kita restaurant website
          </SheetDescription>
        </SheetHeader>

        <div className="flex size-full flex-col items-center justify-center">
          {/* Navigation Links */}
          <NavLinks
            orientation="vertical"
            spacing="lg"
            className="items-center justify-center"
            linkClassName="text-xl font-medium py-2 w-full text-center hover:text-primary transition-colors"
          />

          {/* CTA Button */}
          <div className="mt-8 w-full px-4">
            <Button className="w-full" size="lg" asChild>
              <Link href={"/"}>Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
