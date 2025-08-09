export interface INavigationItem {
  label: string;
  href: string;
}

export const navigationItems: INavigationItem[] = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Tentang Kami",
    href: "#about",
  },
  {
    label: "Galeri",
    href: "#gallery",
  },
  {
    label: "Reservasi",
    href: "/reservation",
  },
  {
    label: "Kontak",
    href: "#contact",
  },
];
