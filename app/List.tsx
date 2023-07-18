"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Result } from "./types";
import placeholderImage from "assets/images/placeholder.png";

type ListProps = {
  games: Result[];
};

export const ListGames = ({ games }: ListProps) => {
  if (!games.length) {
    return <div>No data</div>;
  }

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 ">
      {games.map((game) => (
        <div key={game.id}>
          <p className="leading-7 truncate">{game.name}</p>
          {game.background_image ? (
            <div className="w-full">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={game.background_image}
                  fill
                  className="rounded-md object-cover"
                  alt="Picture of the author"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </AspectRatio>
            </div>
          ) : (
            <AspectRatio ratio={16 / 9}>
              <Image
                src={placeholderImage}
                fill
                className="rounded-md object-cover"
                alt="Picture of the author"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </AspectRatio>
          )}
        </div>
      ))}
    </div>
  );
};
