
import * as React from "react";

import Icon from "@/components/ui/icon";

import Icon from "@/components/ui/icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const FicHeader: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">

            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-gradient">StarBook</span>
            </Link>

            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">Фанфики</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary-100/50 to-primary-200/50 p-6 no-underline outline-none focus:shadow-md" href="/">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Популярное
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Читайте лучшие работы по мнению сообщества
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-secondary-100/50 to-secondary-200/50 p-6 no-underline outline-none focus:shadow-md" href="/">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Новинки
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Свежие фанфики от авторов платформы
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/" title="По фандомам">
                        Поиск по вселенным и оригинальным работам
                      </ListItem>
                      <ListItem href="/" title="По жанрам">
                        Подберите историю по настроению
                      </ListItem>
                      <ListItem href="/" title="По авторам">
                        Найдите своих любимых создателей
                      </ListItem>
                      <ListItem href="/" title="Конкурсные работы">
                        Участники и победители конкурсов
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">Авторы</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      <ListItem href="/" title="Рейтинг авторов">
                        Авторы с лучшими отзывами и рейтингом
                      </ListItem>
                      <ListItem href="/" title="Новые авторы">
                        Начинающие писатели, которым нужна поддержка
                      </ListItem>
                      <ListItem href="/" title="Стать автором">
                        Создайте аккаунт и начните публиковать свои истории
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Конкурсы
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:flex items-center">
              <input
                type="text"
                placeholder="Поиск фанфиков..."
                className="py-2 pl-10 pr-4 rounded-full border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all bg-background"
              />
              <Icon name="Search" size={18} className="absolute left-3 text-muted-foreground" />
            </div>
            <Button size="sm" variant="outline" className="hidden md:flex items-center gap-2">
              <Icon name="LogIn" size={16} />
              Войти
            </Button>
            <Button size="sm" className="hidden md:flex btn-glow">Регистрация</Button>
            <Button size="icon" variant="ghost" className="md:hidden">
              <Icon name="Search" size={20} />
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export default FicHeader;
