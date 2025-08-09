import Logo from "@/components/common/Logo";
import MobileMenu from "@/components/layouts/Header/MobileMenu";
import NavLinks from "@/components/layouts/Header/NavLinks";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavLinks />
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex">
          <Button>Hubungi Kami</Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
