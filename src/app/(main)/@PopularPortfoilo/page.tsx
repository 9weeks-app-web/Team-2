import { PopularPortfolio } from "@/app/(main)/components/PopularPortfolio/PopularPortfolio";
import React from "react";

const Page = async () => {
  // const res = await fetch("http://localhost:3000/api/popularportfolio");
  // const topSeven = await res.json();
  return <PopularPortfolio />;
};

export default Page;
