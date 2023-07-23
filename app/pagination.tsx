"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchParams } from "./page";
import qs from "qs";

type PaginationProps = {
  searchParams: SearchParams;
  count: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  searchParams,
  count,
}) => {
  const actualPage = Number(searchParams.page) || 1;

  const pages = Math.ceil(count / 30);
  const hasNextPage = actualPage < pages;
  const isFirstPage = actualPage === 1;

  console.log(count);

  if (!hasNextPage && isFirstPage) {
    return null;
  }

  return (
    <div className="flex items-center justify-end mt-4">
      <Button
        className={`mr-3 ${isFirstPage ? "invisible" : ""}`}
        variant="outline"
        asChild
      >
        <Link
          href={`?${qs.stringify({
            ...searchParams,
            page: actualPage - 1,
          })}`}
        >
          <ChevronLeftIcon className="h-4 w-4" /> Previous
        </Link>
      </Button>

      <Button
        className={`${!hasNextPage ? "invisible" : ""}`}
        variant="outline"
        asChild
      >
        <Link
          href={`?${qs.stringify({
            ...searchParams,
            page: actualPage + 1,
          })}`}
        >
          Next <ChevronRightIcon className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};
