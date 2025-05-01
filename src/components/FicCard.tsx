
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export interface FicCardProps {
  id: string;
  title: string;
  author: string;
  fandom: string;
  genre: string[];
  rating: string;
  description: string;
  likes: number;
  comments: number;
  chapters: number;
  date: string;
}

const ratingColors: Record<string, string> = {
  "G": "bg-green-100 text-green-800",
  "PG": "bg-blue-100 text-blue-800",
  "PG-13": "bg-yellow-100 text-yellow-800",
  "R": "bg-orange-100 text-orange-800",
  "NC-17": "bg-red-100 text-red-800",
};

const FicCard: React.FC<FicCardProps> = ({
  id,
  title,
  author,
  fandom,
  genre,
  rating,
  description,
  likes,
  comments,
  chapters,
  date,
}) => {
  return (
    <Card className="h-full overflow-hidden group card-hover animate-scale-in">
      <CardHeader className="p-4 pb-2 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-display text-lg font-semibold line-clamp-1 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <span className={cn("text-xs font-medium px-2 py-0.5 rounded", ratingColors[rating] || "bg-gray-100 text-gray-800")}>
            {rating}
          </span>
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium hover:text-primary-600 transition-colors">{author}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs bg-primary-50 hover:bg-primary-100 text-primary-800 border-primary-200">
            {fandom}
          </Badge>
          {genre.slice(0, 2).map((g) => (
            <Badge 
              key={g} 
              variant="outline" 
              className="text-xs bg-secondary-50 hover:bg-secondary-100 text-secondary-800 border-secondary-200"
            >
              {g}
            </Badge>
          ))}
          {genre.length > 2 && (
            <Badge variant="outline" className="text-xs">+{genre.length - 2}</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Icon name="Heart" size={14} className="text-primary-500" />
            {likes}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="MessageCircle" size={14} />
            {comments}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="Bookmark" size={14} />
            {chapters}
          </span>
        </div>
        <span className="text-xs">{date}</span>
      </CardFooter>
    </Card>
  );
};

export default FicCard;
