import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const array = new Array(20).fill(0);
  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {array.map((_, index) => {
        return (
          <div className="flex items-center flex-col" key={index}>
            <Skeleton className="h-4 w-[230px] mb-1" />
            <Skeleton className="h-[130px] w-full" />
          </div>
        );
      })}
    </div>
  );
}
