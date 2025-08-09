import { featuresData } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";

import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-12">
        <SectionTitle
          title="Mengapa Memilih Rasa Kita?"
          highlightText="Rasa Kita?"
          subtitle="Kami berkomitmen memberikan pengalaman kuliner terbaik dengan keunggulan yang membuat kami berbeda."
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
