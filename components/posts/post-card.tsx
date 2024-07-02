"use client";

// IMPORTS -
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FcLike } from "react-icons/fc";
import NumberTicker from "../magicui/number-ticker";
import { postCardProps } from "@/types/posts";

export const PostCard: React.FC<postCardProps> = ({
  title,
  body,
  tags,
  reactions,
}) => {
  return (
    <Card className="w-auto shadow-sm space-y-2">
      <CardHeader className="space-y-2">
        <CardTitle className="font-semibold text-xl">{title}</CardTitle>
        <CardDescription className="text-justify text-md text-muted-foreground">
          {body}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-x-3">
        {tags.map((tag) => (
          <Badge key={`${tag}-${title}`}> {tag}</Badge>
        ))}
      </CardContent>
      <CardFooter className=" flex gap-x-3 items-center">
        <FcLike className="text-3xl text-red-500" />
        <NumberTicker
          className="text-xl text-muted-foreground"
          value={Number(reactions.likes)}
        />
      </CardFooter>
    </Card>
  );
};
