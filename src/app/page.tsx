// import Image from "next/image";

import { NavTabs } from "@/components/Nav/NavTabs";
import { Navigation } from "@/components/Nav/Navigation";
import { CustomCarousel } from "@/components/CustomCarousel";
import { ProjectIntro } from "./components/main/ProjectIntro";
import { FindMyTeam } from "./components/main/FindMyTeam";
import { CategoryVetical } from "@/components/Category/CategoryVetical";
export default function Home() {
  return (
    <>
      <NavTabs />
      <Navigation />
      <CustomCarousel />
      <ProjectIntro />
      <FindMyTeam />
      <div style={{ margin: "auto", width: "500px" }}>
        <CategoryVetical />
      </div>
    </>
  );
}
