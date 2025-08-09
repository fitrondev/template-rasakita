import { testimonialsData } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-12">
        <SectionTitle
          title="Apa Kata Pelanggan Kami?"
          highlightText="Pelanggan Kami?"
          subtitle="Kepuasan pelanggan adalah prioritas utama kami. Dengarkan pengalaman mereka yang telah merasakan kelezatan masakan kami."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
