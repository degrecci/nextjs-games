import { GameRead } from "./types";
import { axiosInstance } from "@/service/axios";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: game } = await axiosInstance.get<GameRead>(
    `/games/${params.id}`
  );

  return (
    <div>
      <p>{JSON.stringify(game, null, 2)}</p>
    </div>
  );
}
