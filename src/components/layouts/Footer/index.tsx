import Link from "next/link";

import { footerData, restaurantInfo } from "@/constants/data";

import Logo from "@/components/common/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Restaurant Info */}
          <div className="lg:col-span-1">
            <Logo className="text-foreground mb-2 w-fit rounded-full bg-white p-2" />
            <p className="mb-4 text-white/80">{restaurantInfo.description}</p>

            <div className="space-y-2 text-sm text-white/70">
              <p>{restaurantInfo.address}</p>
              <p>{restaurantInfo.phone}</p>
              <p>{restaurantInfo.email}</p>
            </div>
          </div>

          {/* Footer Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h4 className="mb-4 text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="mr-2 text-sm text-white/70">Ikuti Kami:</span>
              {footerData.socialMedia.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors duration-200 hover:text-white"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-white/70 md:text-right">
              <p>{footerData.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
