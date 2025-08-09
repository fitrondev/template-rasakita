# Rasa Kita - Restoran Tradisional Indonesia

Sebuah website restoran tradisional Indonesia yang modern dan responsif yang dibangun dengan Next.js dan Tailwind CSS untuk menyediakan pengalaman kuliner nusantara terbaik.

**Dibuat oleh:** [Fitron Ansori](https://github.com/fitronansori) | **Website:** [ansoridev.site](https://ansoridev.site) | **Support/Donasi:** [Saweria](https://saweria.co/fitronansori)

## 🚀 Fitur

- **Design Modern**: UI yang indah dan responsif dengan animasi yang smooth
- **Next.js 15**: Framework React terbaru dengan App Router
- **Tailwind CSS**: Framework CSS utility-first untuk styling yang cepat
- **TypeScript**: Type safety penuh di seluruh project
- **Component-based**: Komponen yang modular dan reusable
- **Mobile-first**: Design responsif untuk semua device
- **Responsive Design**: Design yang responsif untuk semua perangkat
- **Radix UI**: Komponen UI yang accessible dan customizable

## 📁 Struktur Project

```text
rasa-kita/
├── public/
│   └── assets/
│       ├── images/          # Gambar dan aset visual
│       └── svg/             # File SVG
├── src/
│   ├── app/
│   │   ├── (home)/          # Route group untuk halaman utama
│   │   │   ├── menu/        # Halaman menu
│   │   │   ├── reservation/ # Halaman reservasi
│   │   │   └── page.tsx     # Halaman beranda
│   │   ├── favicon.ico      # Favicon
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout

│   ├── components/
│   │   ├── common/          # Komponen yang reusable
│   │   │   ├── Avatar.tsx   # Komponen avatar
│   │   │   ├── Logo.tsx     # Komponen logo
│   │   │   └── SectionTitle.tsx # Komponen judul section
│   │   ├── layouts/         # Komponen section halaman
│   │   │   ├── Footer/      # Footer
│   │   │   ├── Header/      # Header/Navigation
│   │   │   ├── Hero/        # Section hero
│   │   │   ├── menu/        # Komponen menu
│   │   │   └── reservation/ # Komponen reservasi
│   │   └── ui/              # UI components (Radix UI)
│   ├── constants/
│   │   └── data.ts          # Data statis dan interface
│   └── lib/
│       └── utils.ts         # Utility functions
├── components.json          # Config Radix UI
├── next.config.ts           # Config Next.js
├── tailwind.config.ts       # Config Tailwind CSS
└── tsconfig.json            # Config TypeScript
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Development**: ESLint, Prettier

## 📦 Dependencies

### Core Dependencies

- `next`: Framework React dengan App Router
- `react` & `react-dom`: Library React
- `typescript`: Type safety
- `tailwindcss`: Framework CSS utility-first
- `react-hook-form`: Form handling

### UI & Components

- `@radix-ui/*`: Headless UI primitives (avatar, dialog, label, select, slot, tooltip)
- `lucide-react`: Icon library
- `class-variance-authority`: Component variants
- `clsx` & `tailwind-merge`: Utility functions

## 🚦 Getting Started

### Prerequisites

Pastikan kamu punya Node.js 18+ yang sudah terinstall di komputer.

### Installation

1. **Clone repository**

   ```bash
   git clone <url-repo>
   cd rasa-kita
   ```

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. **Buka browser**

   Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📜 Available Scripts

- `npm run dev` - Start development server dengan Next.js
- `npm run build` - Build aplikasi untuk production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint untuk code quality

## 🎨 Customization

### Mengubah Content

Edit data di `src/constants/data.ts` untuk customize:

- Navigation items
- Hero section content
- Menu items dan kategori
- Restaurant info
- Testimonials

### Styling

Project ini menggunakan Tailwind CSS untuk styling. Kamu bisa:

- Modify `tailwind.config.ts` untuk custom config
- Update `src/index.css` untuk global styles
- Customize component styles di file masing-masing
- Gunakan theme provider untuk dark/light mode

### Components

Semua section bersifat modular dan bisa ditemukan di `src/components/layouts/`:

- `Hero/` - Landing hero section
- `menu/` - Komponen menu restoran
- `reservation/` - Form reservasi
- `Footer/` - Footer dengan informasi lengkap
- `Header/` - Navigation header

## 🌐 Deployment

### Vercel (Recommended)

1. Push code kamu ke GitHub
2. Import repository di [Vercel](https://vercel.com)
3. Deploy dengan zero configuration

### Platform Lain

Project ini bisa di-deploy di platform mana pun yang support static sites atau SPA:

- Netlify
- Railway
- Heroku
- AWS S3 + CloudFront
- Google Cloud Platform
- GitHub Pages

## 📱 Features Overview

- **Responsive Design**: Works perfect di desktop, tablet, dan mobile
- **Modern UI**: Design yang clean dan professional dengan smooth animation
- **Menu Catalog**: Menu makanan dan minuman tradisional Indonesia
- **Reservation System**: Form reservasi meja dengan validasi
- **Modern Components**: Komponen yang modular dan reusable
- **Accessibility**: Built dengan Radix UI untuk accessibility terbaik
- **Performance**: Optimized dengan Next.js untuk loading yang cepat

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/fitur-keren`)
3. Commit perubahan (`git commit -m 'Add fitur keren'`)
4. Push ke branch (`git push origin feature/fitur-keren`)
5. Buka Pull Request

## 📄 License

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🆘 Support

Kalau kamu mengalami masalah atau punya pertanyaan:

1. Check bagian [Issues](../../issues)
2. Buat issue baru kalau masalah kamu belum ada
3. Kasih detail sebanyak mungkin

## 🙏 Acknowledgments

- Built dengan [Next.js](https://nextjs.org/)
- Styled dengan [Tailwind CSS](https://tailwindcss.com/)
- UI components dari [Radix UI](https://www.radix-ui.com/)
- Icons dari [Lucide](https://lucide.dev/)
- Forms dengan [React Hook Form](https://react-hook-form.com/)

**Happy coding!**
