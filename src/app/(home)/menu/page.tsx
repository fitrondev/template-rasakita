import SectionTitle from "@/components/common/SectionTitle";
import MenuSection from "@/components/layouts/menu/MenuSection";

const MenuPage = () => {
  return (
    <div className="py-10">
      <div className="container space-y-12">
        {/* Page Header */}
        <SectionTitle
          title="Menu Kami"
          highlightText="Kami"
          subtitle="Nikmati kelezatan masakan Indonesia autentik dengan cita rasa yang tak terlupakan"
        />

        {/* Menu Section */}
        <MenuSection />
      </div>
    </div>
  );
};

export default MenuPage;
