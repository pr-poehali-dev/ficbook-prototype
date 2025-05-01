
import * as React from "react";

import Icon from "@/components/ui/icon";

import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface FicSectionProps {
  title: string;
  subtitle: string;
  fics: FicCardProps[];
}

const FicSection: React.FC<FicSectionProps> = ({ title, subtitle, fics }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground md:text-lg">{subtitle}</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 animate-hover">
            Смотреть все
            <Icon name="ChevronRight" className="ml-2" size={16} />
          </Button>
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
