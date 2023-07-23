import { GamesList } from "./games";
import GamesLoading from "./games-loading";
import { Search } from "./search";
import { Suspense } from "react";

export type SearchParams = {
  search: string;
  page: number;
};

type HomeProps = {
  searchParams: SearchParams;
};

export default async function Home({ searchParams }: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-16">
      <Search searchParams={searchParams} />
      <Suspense fallback={<GamesLoading />}>
        <GamesList searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
