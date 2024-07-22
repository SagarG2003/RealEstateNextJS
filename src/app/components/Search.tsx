"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Input } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const handleChange = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) params.set("query", query);
    else params.delete("query");

    router.replace(`${pathName}?${params.toString()}`);
  }, 1000);

  return (
    <div className="pl-60 flex items-center justify-center placeholder:italic font-bold">
      <Input
        placeholder="Search for locality, landmark...."
        onChange={(e) => handleChange(e.target.value)}
        className="w-96 shadow"
        endContent={<MagnifyingGlassIcon className="w-6 text-slate-500 " />}
        defaultValue={searchParams.get("query") ?? ""}
      />
    </div>
  );
};

export default Search;
