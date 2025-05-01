
import * as React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

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
    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/fic/${id}`}>
              <CardTitle className="text-xl hover:text-[#7E69AB] transition-colors">{title}</CardTitle>
            </Link>
            <div className="flex gap-1 mt-1 text-sm">
              <Link to={`/fandom/${fandom}`} className="text-[#7E69AB] hover:underline">
                {fandom}
              </Link>
              <span className="text-gray-500">•</span>
              <Link to={`/author/${author}`} className="text-[#7E69AB] hover:underline">
                {author}
              </Link>
            </div>
          </div>
          <Badge 
            variant={rating === "NC-17" ? "destructive" : rating === "R" ? "default" : "secondary"}
            className={rating === "NC-17" ? "bg-red-500" : rating === "R" ? "bg-[#9b87f5]" : "bg-green-500"}
          >
            {rating}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {genre.map((g) => (
            <Badge key={g} variant="outline" className="text-xs bg-[#F2FCE2] text-[#403E43]">
              {g}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4 text-sm text-gray-500">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <Icon name="Heart" size={16} className="mr-1 text-[#7E69AB]" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center">
            <Icon name="MessageSquare" size={16} className="mr-1 text-[#7E69AB]" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center">
            <Icon name="BookOpen" size={16} className="mr-1 text-[#7E69AB]" />
            <span>{chapters} гл.</span>
          </div>
        </div>
        <div>{date}</div>
      </CardFooter>
    </Card>
  );
};

export default FicCard;
