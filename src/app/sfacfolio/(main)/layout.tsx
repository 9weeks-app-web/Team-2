import { UploadButton } from "../components/Button/UploadButton";
import { HotCreatorCarousel } from "../components/HotCreatorCarousel";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { Recommend } from "../components/RecommendPortfolio/Recommend";
import { SearchBarPortfolio } from "../components/SearchBarPortfolio";
export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
      {/* <Recommend />;
      <SearchBarPortfolio />
      <Portfolio slideLen={8} />
      <HotCreatorCarousel />
      <Portfolio slideLen={16} /> */}
    </>
  );
}
