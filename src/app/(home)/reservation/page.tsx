import SectionTitle from "@/components/common/SectionTitle";
import ReservationForm from "@/components/layouts/reservation/ReservationForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReservationPage = () => {
  return (
    <section className="py-12">
      <div className="container space-y-12">
        {/* Section Title */}
        <SectionTitle
          title="Reservasi Meja"
          highlightText="Meja"
          subtitle="Reservasi meja Anda sekarang dan nikmati pengalaman kuliner terbaik bersama keluarga dan teman-teman."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Additional Information */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Informasi Penting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <p className="text-muted-foreground">
                    Reservasi dapat dilakukan maksimal 7 hari sebelumnya
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <p className="text-muted-foreground">
                    Konfirmasi reservasi akan dikirim melalui WhatsApp atau
                    email
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <p className="text-muted-foreground">
                    Untuk grup lebih dari 10 orang, silakan hubungi langsung
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <p className="text-muted-foreground">
                    Pembatalan dapat dilakukan 2 jam sebelum waktu reservasi
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <p className="text-muted-foreground">
                    Jam operasional: 08:00 - 22:00 (Senin - Minggu)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationPage;
