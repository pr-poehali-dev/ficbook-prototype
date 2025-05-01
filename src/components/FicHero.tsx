
import * as React from "react";

import Icon from "@/components/ui/icon";

import Icon from "@/components/ui/icon";

const FicHero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-600 pt-20 pb-24 md:pt-28 md:pb-32 text-white">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-32 h-96 w-96 rounded-full bg-primary-300/20 blur-3xl"></div>
        <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-secondary-400/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Истории, мерцающие <span className="whitespace-nowrap">словно звезды</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-10 opacity-90 font-light">
            Присоединяйтесь к галактическому сообществу авторов и читателей.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-light btn-glow border-0">
              <Icon name="Edit3" className="mr-2" size={20} />
              Написать историю
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Читать популярное
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap gap-3 justify-center">
            <div className="py-1 px-3 rounded-full bg-white/10 text-sm font-medium">Фэнтези</div>
            <div className="py-1 px-3 rounded-full bg-white/10 text-sm font-medium">Фантастика</div>
            <div className="py-1 px-3 rounded-full bg-white/10 text-sm font-medium">Драма</div>
            <div className="py-1 px-3 rounded-full bg-white/10 text-sm font-medium">Романтика</div>
            <div className="py-1 px-3 rounded-full bg-white/10 text-sm font-medium">Гарри Поттер</div>
            <div className="py-1 px-3 rounded-full bg-white/10 text-sm font-medium">Аниме</div>
            <div className="py-1 px-3 rounded-full bg-white/10 text-sm font-medium">Приключения</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicHero;
