import { Games } from "./types";
import { ListGames } from "./List";
import { SearchForm } from "./Form";
import { Suspense } from "react";
import { axiosInstance } from "@/service/axios";

type HomeProps = {
  searchParams: { search: string };
};

export default async function Home({ searchParams }: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-16">
      <SearchForm searchParams={searchParams} />
      <Suspense fallback={<div>Loading...</div>}>
        <ListGames searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
