import { GameRead, ScreenshotsRead } from "./types";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Description } from "./description";
import Link from "next/link";
import { axiosInstance } from "@/service/axios";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: game } = await axiosInstance.get<GameRead>(
    `/games/${params.id}`
  );

  return (
    <div className="min-h-screen p-4 md:p-16">
      <Link href="/">
        <Button className="hidden md:inline-flex" variant="outline" size="icon">
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
      </Link>
      <h1 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {game.name}
      </h1>
      <Description description={game.description} />
    </div>
  );
}
