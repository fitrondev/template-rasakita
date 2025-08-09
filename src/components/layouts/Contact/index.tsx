import { contactData } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container space-y-12">
        {/* Section Header */}
        <SectionTitle
          title="Hubungi Kami"
          highlightText="Kami"
          subtitle="Kami siap melayani Anda dengan sepenuh hati. Hubungi kami untuk reservasi, pertanyaan, atau saran."
          centered
        />

        {/* Contact Info Cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactData.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Map or Additional Info */}
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h3 className="mb-6 text-center text-2xl font-bold">Lokasi Kami</h3>
            <div className="mb-6 flex aspect-video items-center justify-center rounded-lg bg-gray-200">
              <p className="text-muted-foreground">
                Google Maps akan ditampilkan di sini
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold">Akses Transportasi</h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- 5 menit dari Stasiun MRT Blok M</li>
                  <li>- 10 menit dari Halte TransJakarta Blok M</li>
                  <li>- Tersedia parkir mobil dan motor</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Fasilitas</h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- WiFi gratis</li>
                  <li>- AC dan tempat duduk nyaman</li>
                  <li>- Mushola dan toilet bersih</li>
                  <li>- Area bermain anak</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
