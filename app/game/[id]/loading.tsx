import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen p-4 md:p-16">
      <Skeleton className="hidden md:inline-flex h-[36px] w-[36px]" />
      <Skeleton className="h-[45px] w-full mt-10" />
      <Skeleton className="h-[28px] w-full mt-8" />
      <Skeleton className="h-[28px] w-full mt-1" />
      <Skeleton className="h-[28px] w-full mt-1" />
    </div>
  );
}
