"use client";

import { useEffect, useRef, useState } from "react";

type SearchFormProps = {
  query?: string;
  category?: string;
};

export default function SearchForm({ query, category }: SearchFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState(query ?? "");

  useEffect(() => {
    if (value.length < 3 || value === query) return;

    const timeout = setTimeout(() => {
      formRef.current?.requestSubmit();
    }, 400); // debounce

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <form
      ref={formRef}
      action="/search"
      method="GET"
      className="flex flex-col gap-4 md:flex-row"
    >
      <input
        type="text"
        name="q"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search articles"
        className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/40"
      />

      <select
        name="category"
        defaultValue={category}
        className="rounded-lg border border-white/10 bg-black px-4 py-3 text-white"
      >
        <option value="">All categories</option>
        <option value="changelog">Changelog</option>
        <option value="engineering">Engineering</option>
        <option value="customers">Customers</option>
        <option value="company-news">Company News</option>
        <option value="community">Community</option>
      </select>

      <button
        type="submit"
        className="rounded-lg border border-white/10 px-4 py-3 text-white"
      >
        Search
      </button>
    </form>
  );
}
