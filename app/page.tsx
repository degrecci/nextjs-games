import { axiosInstance } from "@/service/axios";
import { Games } from "./types";

export default async function Home() {
  const games = await axiosInstance.get<Games>("/games");
  const { results } = games.data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {results.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
    </main>
  );
}
