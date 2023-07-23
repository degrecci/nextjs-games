import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Games } from "./types";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "./pagination";
import { SearchParams } from "./page";
import { axiosInstance } from "@/service/axios";
import placeholderImage from "assets/images/placeholder.png";

type GamesListProps = {
  searchParams: SearchParams;
};

export const GamesList = async ({ searchParams }: GamesListProps) => {
  const games = await axiosInstance.get<Games>(`/games`, {
    params: { ...searchParams, page_size: 30 },
  });
  const { results } = games.data;

  if (!results.length) {
    return <p className="leading-7">No results found in your search</p>;
  }

  return (
    <>
      <div className="grid 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {results.map((game) => (
          <div key={game.id}>
            <Link href={`/game/${game.id}`}>
              <Card className="hover:bg-slate-100">
                <CardHeader>
                  <CardTitle>{game.name}</CardTitle>
                  <CardDescription className="truncate">
                    {!game.platforms?.length
                      ? "N/A"
                      : game.platforms
                          .map(({ platform }) => platform.name)
                          .join(", ")}
                  </CardDescription>
                </CardHeader>

                <CardContent>
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
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>

      <Pagination searchParams={searchParams} count={games.data.count} />
    </>
  );
};
