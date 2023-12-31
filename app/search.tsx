"use client";

import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import qs from "qs";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  search: z.string(),
});

type FormProps = {
  searchParams: { search: string };
};

export const Search = ({ searchParams }: FormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: searchParams?.search || "",
    },
  });
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSubmit(values: z.infer<typeof formSchema>) {
    const queryParams = qs.stringify(values);

    startTransition(() => {
      return router.replace(`${pathname}?${queryParams}`);
    });
  }

  function handleClear() {
    form.setValue("search", "");
    startTransition(() => router.replace(pathname));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mb-8">
        <div className="flex w-full max-w-sm items-end space-x-2 columns-1 mb-4">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Search</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Search games..."
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-x-2">
          <Button type="submit" disabled={isPending}>
            {isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
          <Button onClick={handleClear} type="button" variant="secondary">
            Clear
          </Button>
        </div>
      </form>
    </Form>
  );
};
