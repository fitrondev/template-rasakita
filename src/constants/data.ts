import {
  ChefHat,
  Clock,
  Heart,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
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

// Contact data for restaurant
export interface IContactInfo {
  id: number;
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export const contactData: IContactInfo[] = [
  {
    id: 1,
    icon: MapPin,
    title: "Alamat",
    value: "Jl. Raya Kuliner No. 123",
    description: "Jakarta Selatan, DKI Jakarta 12345",
  },
  {
    id: 2,
    icon: Phone,
    title: "Telepon",
    value: "+62 21 1234 5678",
    description: "Buka setiap hari 08:00 - 22:00",
  },
  {
    id: 3,
    icon: Mail,
    title: "Email",
    value: "info@rasakita.com",
    description: "Untuk reservasi dan pertanyaan",
  },
  {
    id: 4,
    icon: Clock,
    title: "Jam Operasional",
    value: "08:00 - 22:00",
    description: "Senin - Minggu (Buka setiap hari)",
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

// Testimonials data for restaurant
export interface ITestimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonialsData: ITestimonial[] = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Food Blogger",
    content:
      "Rasa Kita benar-benar memberikan pengalaman kuliner yang autentik! Rendang mereka adalah yang terbaik yang pernah saya coba di Jakarta. Suasana restoran juga sangat nyaman untuk keluarga.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Pelanggan Setia",
    content:
      "Sudah 3 tahun menjadi pelanggan setia Rasa Kita. Kualitas makanan selalu konsisten dan pelayanannya sangat ramah. Tempat favorit keluarga untuk makan bersama!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Maya Sari",
    role: "Chef Profesional",
    content:
      "Sebagai sesama chef, saya sangat menghargai dedikasi Rasa Kita dalam mempertahankan cita rasa tradisional. Bumbu-bumbu yang digunakan sangat berkualitas dan teknik memasaknya sempurna.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Ahmad Rahman",
    role: "Pengusaha",
    content:
      "Lokasi yang strategis dan makanan yang lezat membuat Rasa Kita menjadi pilihan utama untuk meeting bisnis. Nasi gudeg dan ayam bakar mereka tidak pernah mengecewakan.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Dewi Lestari",
    role: "Ibu Rumah Tangga",
    content:
      "Anak-anak saya sangat suka dengan gado-gado dan soto ayam di Rasa Kita. Porsinya pas, harganya terjangkau, dan rasanya seperti masakan rumah. Highly recommended!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Rizki Pratama",
    role: "Mahasiswa",
    content:
      "Sebagai mahasiswa, saya sangat terbantu dengan harga yang terjangkau tapi rasa yang tidak murahan. Nasi campur mereka lengkap dan mengenyangkan. Perfect untuk kantong mahasiswa!",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];
