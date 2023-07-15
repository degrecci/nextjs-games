import { axiosInstance } from "@/service/axios";

import { SearchForm } from "./Form";
import { ListGames } from "./List";
import { Games } from "./types";
import { Suspense } from "react";

type HomeProps = {
  searchParams: { search: string };
};

export default async function Home({ searchParams }: HomeProps) {
  const games = await axiosInstance.get<Games>(`/games`, {
    params: searchParams,
  });
  const { results } = games.data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchForm />
      <Suspense fallback={<div>Loading...</div>}>
        <ListGames games={results} />
      </Suspense>
    </main>
  );
}
