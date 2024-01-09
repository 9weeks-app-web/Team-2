import { CustomCarousel } from "@/components/CustomCarousel";
import { FindMyTeam } from "@/app/(main)/components/FindMyTeam";
import { TodayTerm } from "./components/TodayTerm/TodayTerm";
export default function Layout({
  children,
  PopularPortfoilo,
  PopularProject,
  PopularTopic,
  JobAdvertisement,
  News,
}: {
  children: React.ReactNode;
  PopularPortfoilo: React.ReactNode;
  PopularProject: React.ReactNode;
  PopularTopic: React.ReactNode;
  JobAdvertisement: React.ReactNode;
  News: React.ReactNode;
}) {
  return (
    <div>
      <CustomCarousel />
      {PopularPortfoilo}
      <FindMyTeam url="" />
      {PopularProject}
      <TodayTerm />
      {PopularTopic}
      {JobAdvertisement}
      {News}
    </div>
  );
}
