
import * as React from "react";
import FicCard, { FicCardProps } from "@/components/FicCard";

interface FicSectionProps {
  title: string;
  subtitle?: string;
  fics: FicCardProps[];
}

const FicSection: React.FC<FicSectionProps> = ({ title, subtitle, fics }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1A1F2C]">{title}</h2>
          {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fics.map((fic) => (
            <FicCard key={fic.id} {...fic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FicSection;
