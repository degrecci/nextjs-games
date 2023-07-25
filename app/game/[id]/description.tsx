"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { useState } from "react";

export const Description = ({ description }: { description: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-6">
      <CollapsibleTrigger>
        <div
          className="leading-7 [&:not(:first-child)]:mt-6 font-semibold"
          dangerouslySetInnerHTML={{
            __html: `${description
              .split(" ")
              .slice(0, 10)
              .join(" ")}... See more`,
          }}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div
          className="leading-7 [&:not(:first-child)]:mt-6 h-1/5"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CollapsibleContent>
    </Collapsible>
  );
};
