import {
  ChefHat,
  Clock,
  Heart,
  LucideIcon,
  MapPin,
  Star,
  Users,
} from "lucide-react";

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

// Restaurant specific info
export const restaurantInfo = {
  name: "Rasa Kita Restaurant",
  tagline: "Authentic Indonesian Cuisine",
  description:
    "Experience the authentic taste of Indonesia with our traditional recipes and warm hospitality.",
  phone: "+62 21 1234 5678",
  email: "info@rasakita.com",
  address: "Jl. Kuliner No. 123, Jakarta Selatan",
};

// Features data for restaurant
export interface IFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const featuresData: IFeature[] = [
  {
    icon: ChefHat,
    title: "Masakan Autentik",
    description:
      "Hidangan tradisional Indonesia yang diolah dengan resep turun temurun dan bumbu pilihan.",
  },
  {
    icon: Users,
    title: "Suasana Keluarga",
    description:
      "Tempat yang nyaman dan hangat untuk berkumpul bersama keluarga dan teman-teman.",
  },
  {
    icon: Clock,
    title: "Pelayanan Cepat",
    description:
      "Layanan yang ramah dan cepat untuk memastikan pengalaman makan yang menyenangkan.",
  },
  {
    icon: Star,
    title: "Kualitas Terjamin",
    description:
      "Menggunakan bahan-bahan segar berkualitas tinggi untuk cita rasa yang tak terlupakan.",
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description:
      "Terletak di pusat kota dengan akses mudah dan area parkir yang luas.",
  },
  {
    icon: Heart,
    title: "Dibuat dengan Cinta",
    description:
      "Setiap hidangan disiapkan dengan penuh perhatian dan cinta untuk kepuasan Anda.",
  },
];
