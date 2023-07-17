import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Custom401() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">
        <strong>401</strong> - Fail to Authenticate
      </h1>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        Try again
      </Link>
    </div>
  );
}
