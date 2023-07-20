import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const array = new Array(20).fill(0);
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {array.map((_, index) => {
        return (
          <div className="flex items-center flex-col" key={index}>
            <Skeleton className="h-4 w-[240px] mb-2" />
            <Skeleton className="h-[130px] w-[240px]" />
          </div>
        );
      })}
    </div>
  );
}
