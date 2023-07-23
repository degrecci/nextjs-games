import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

export default function GamesLoading() {
  const array = new Array(30).fill(0);
  return (
    <div className="grid 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
      {array.map((_, index) => {
        return (
          <div className="flex items-center flex-col w-full" key={index}>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-4 w-full mb-1" />
                </CardTitle>

                <CardDescription className="truncate">
                  <Skeleton className="h-4 w-full mb-1" />
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Skeleton className="h-[130px] w-full" />
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
