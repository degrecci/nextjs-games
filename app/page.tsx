import { axiosInstance } from "@/service/axios";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Games } from "./types";
import { SearchForm } from "./Form";

export default async function Home() {
  const games = await axiosInstance.get<Games>("/games");
  const { results } = games.data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchForm />
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 ">
        {results.map((game) => (
          <div key={game.id}>
            {game.name}
            <div className="w-full">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={game.background_image}
                  fill
                  className="rounded-md object-cover"
                  alt="Picture of the author"
                />
              </AspectRatio>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
