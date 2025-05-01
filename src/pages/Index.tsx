
import * as React from "react";
import FicHeader from "@/components/FicHeader";
import FicHero from "@/components/FicHero";
import FicSection from "@/components/FicSection";
import { FicCardProps } from "@/components/FicCard";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-surface">
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
      
      {/* Секция статистики */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">Присоединяйтесь к сообществу</h2>
            <p className="text-muted-foreground md:text-lg max-w-xl mx-auto">Тысячи авторов и миллионы читателей уже делятся своими историями</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-soft">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-2">12.5K+</div>
              <div className="text-muted-foreground">Авторов</div>
            </div>
            <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-soft">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-2">85K+</div>
              <div className="text-muted-foreground">Фанфиков</div>
            </div>
            <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-soft">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-2">1.2M+</div>
              <div className="text-muted-foreground">Читателей</div>
            </div>
            <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-soft">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-2">320+</div>
              <div className="text-muted-foreground">Фандомов</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA секция */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Готовы начать свою историю?</h2>
            <p className="text-xl mb-8 opacity-90">
              Создайте аккаунт всего за минуту и погрузитесь в мир творчества и фантазии
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-light btn-glow border-0">
                Создать аккаунт
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">

              <div className="font-display text-2xl font-bold mb-4 text-gradient">StarBook</div>

              <p className="text-gray-400 mb-6">
                Сообщество для любителей фанфиков и оригинальных историй
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 text-white">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 text-white">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 text-white">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 text-white">
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Фанфики</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Авторы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Фандомы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Конкурсы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Правила</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Подписка</h3>
              <p className="text-gray-400 mb-4">Получайте новости о конкурсах и новых фичах</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-4 py-2 rounded-l-md bg-white/10 border-0 text-white placeholder:text-gray-400 focus:ring-primary-500"
                />
                <Button className="rounded-l-none">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 ФикБук. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
