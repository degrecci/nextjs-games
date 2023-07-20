import { ListGames } from "./List";
import Loading from "./loading";
import { SearchForm } from "./Form";
import { Suspense } from "react";

type HomeProps = {
  searchParams: { search: string };
};

export default async function Home({ searchParams }: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-16">
      <SearchForm searchParams={searchParams} />
      <Suspense fallback={<Loading />}>
        <ListGames searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
