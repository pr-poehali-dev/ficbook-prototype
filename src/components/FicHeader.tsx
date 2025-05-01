
import * as React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";

const FicHeader: React.FC = () => {
  return (
    <header className="bg-[#7E69AB] text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold">ФикБук</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#6E59A5]">Фанфики</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F2FCE2] hover:text-[#403E43]">
                            <div className="text-sm font-medium leading-none">Популярное</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Самые популярные работы
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F2FCE2] hover:text-[#403E43]">
                            <div className="text-sm font-medium leading-none">Новинки</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Самые свежие фанфики
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F2FCE2] hover:text-[#403E43]">
                            <div className="text-sm font-medium leading-none">Жанры</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Просмотр по категориям
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F2FCE2] hover:text-[#403E43]">
                            <div className="text-sm font-medium leading-none">Фандомы</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Поиск по вселенным
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle() + " bg-transparent text-white hover:bg-[#6E59A5]"}>
                    Авторы
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle() + " bg-transparent text-white hover:bg-[#6E59A5]"}>
                    Беты
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Поиск фанфиков..." 
                className="w-64 rounded-full bg-white/10 placeholder:text-white/70 border-none focus-visible:ring-[#D6BCFA]" 
              />
              <Button 
                size="icon" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full text-white hover:bg-white/20 hover:text-white"
              >
                <Icon name="Search" size={18} />
              </Button>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#7E69AB]">
              Войти
            </Button>
            <Button className="bg-[#9b87f5] hover:bg-[#6E59A5] text-white">
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FicHeader;
