
import * as React from "react";
import FicHeader from "@/components/FicHeader";
import FicHero from "@/components/FicHero";
import FicSection from "@/components/FicSection";
import { FicCardProps } from "@/components/FicCard";

const Index = () => {
  // Демо-данные для фанфиков
  const popularFics: FicCardProps[] = [
    {
      id: "1",
      title: "Когда гаснут звезды",
      author: "SpaceWriter",
      fandom: "Гарри Поттер",
      genre: ["Драма", "Романтика"],
      rating: "G",
      description: "История о том, как Гермиона находит древний артефакт, способный изменить ход войны. Но какую цену придется заплатить за его использование?",
      likes: 428,
      comments: 57,
      chapters: 12,
      date: "15.04.2025",
    },
    {
      id: "2",
      title: "Под маской героя",
      author: "MightyShadow",
      fandom: "Аниме",
      genre: ["Экшн", "Психология"],
      rating: "R",
      description: "Тайная жизнь супергероя, который постепенно теряет связь с реальностью. Сможет ли он найти баланс между двумя своими личностями?",
      likes: 345,
      comments: 28,
      chapters: 7,
      date: "29.04.2025",
    },
    {
      id: "3",
      title: "Бесконечность чувств",
      author: "RomanticSoul",
      fandom: "Собственное",
      genre: ["Романтика", "Повседневность"],
      rating: "NC-17",
      description: "Она работает в кофейне, он заходит каждое утро. Их случайная встреча становится началом страстного романа, который изменит их жизни навсегда.",
      likes: 687,
      comments: 103,
      chapters: 5,
      date: "01.05.2025",
    },
  ];

  const newFics: FicCardProps[] = [
    {
      id: "4",
      title: "Тени прошлого",
      author: "DarkMind",
      fandom: "Ведьмак",
      genre: ["Фэнтези", "Драма"],
      rating: "R",
      description: "Геральт сталкивается с таинственным существом, которое заставляет его переживать самые болезненные воспоминания снова и снова.",
      likes: 58,
      comments: 11,
      chapters: 2,
      date: "02.05.2025",
    },
    {
      id: "5",
      title: "Звездный путь",
      author: "CosmicDreamer",
      fandom: "Научная фантастика",
      genre: ["Фантастика", "Приключения"],
      rating: "G",
      description: "Группа ученых отправляется на миссию к дальней планете, где обнаруживает признаки разумной жизни. Их открытие может изменить будущее человечества.",
      likes: 42,
      comments: 7,
      chapters: 3,
      date: "01.05.2025",
    },
    {
      id: "6",
      title: "В тихом омуте",
      author: "MysteryAuthor",
      fandom: "Детективы",
      genre: ["Детектив", "Триллер"],
      rating: "PG-13",
      description: "Маленький городок потрясен серией странных происшествий. Местный шериф вынужден столкнуться не только с преступником, но и с собственными демонами.",
      likes: 31,
      comments: 8,
      chapters: 1,
      date: "30.04.2025",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      <FicHeader />
      <FicHero />
      
      <FicSection 
        title="Популярное" 
        subtitle="Самые читаемые фанфики этой недели" 
        fics={popularFics} 
      />
      
      <FicSection 
        title="Новинки" 
        subtitle="Только что опубликованные работы" 
        fics={newFics} 
      />
      
      <footer className="bg-[#1A1F2C] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ФикБук</h3>
              <p className="text-gray-400">
                Сообщество для любителей фанфиков и оригинальных историй
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Фанфики</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Авторы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Фандомы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Конкурсы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Правила</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Помощь</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 ФикБук. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
