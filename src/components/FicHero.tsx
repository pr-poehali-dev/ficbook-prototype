
import * as React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FicHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ваши истории ждут своих читателей
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к сообществу авторов и читателей фанфиков. 
            Публикуйте свои работы, находите вдохновение и делитесь впечатлениями.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#7E69AB] hover:bg-[#F2FCE2]">
              <Icon name="Edit3" className="mr-2" size={20} />
              Написать фанфик
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Читать популярное
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicHero;
