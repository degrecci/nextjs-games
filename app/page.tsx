import { axiosInstance } from "@/service/axios";

export default async function Home() {
  const games = await axiosInstance.get("/games");
  const { results } = games.data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(results)}
    </main>
  );
}
