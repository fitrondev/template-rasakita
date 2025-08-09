import Logo from "@/components/common/Logo";
import NavLinks from "@/components/layouts/Header/NavLinks";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/layouts/Header/MobileMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <Button size="sm">
            Pesan Meja
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
