import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const array = new Array(20).fill(0);
  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {array.map((_, index) => {
        return (
          <div className="flex items-center flex-col" key={index}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-4 w-[230px] mb-1" />
                </CardTitle>

                <CardDescription className="truncate">
                  <Skeleton className="h-4 w-[230px] mb-1" />
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Skeleton className="h-[130px] w-full" />
              </CardContent>

              <CardFooter className="flex justify-end">
                <Skeleton className="h-[36px] w-[65px]" />
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
