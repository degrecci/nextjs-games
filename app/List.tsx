import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Games } from "./types";
import Image from "next/image";
import { axiosInstance } from "@/service/axios";
import placeholderImage from "assets/images/placeholder.png";

type ListProps = {
  searchParams: { search: string };
};

export const ListGames = async ({ searchParams }: ListProps) => {
  const games = await axiosInstance.get<Games>(`/games`, {
    params: searchParams,
  });
  const { results } = games.data;

  if (!results.length) {
    return <p className="leading-7">No results found in your search</p>;
  }

  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {results.map((game) => (
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
