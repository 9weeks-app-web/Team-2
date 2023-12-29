"use client";
import { useSearchParams } from "next/navigation";
export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  //Page에서 바로 받을 수 있고 useSearchParams을 통해 받을 수도있음
  const params = useSearchParams();
  const search = params.get("query");
  return (
    <h1>
      My Page
      <div>{JSON.stringify(searchParams)}</div>
      <div>{search}</div>
    </h1>
  );
}
