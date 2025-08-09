import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/hero.jpg"
        alt="Rasa Kita Restaurant Interior"
        fill
        className="absolute inset-0 z-0 object-cover brightness-50"
        priority
      />

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Main Heading */}
          <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Selamat Datang di <span className="text-primary">Rasa Kita</span>
          </h1>

          {/* Description */}
          <p className="text-muted mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
            Nikmati hidangan tradisional Indonesia dengan cita rasa autentik dan
            suasana yang nyaman untuk keluarga.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={"/reservation"}>Pesan Meja Sekarang</Link>
            </Button>

            <Button variant="secondary" size="lg">
              <Link href={"/menu"}>Lihat Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
