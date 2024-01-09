import { NextResponse } from "next/server";
import { popularPortfolioData } from "@/constant/mock";
import { PopularPortfolioImagesObjProps } from "@/types";
export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  const result = getPortfolioInfo(params.category);

  return NextResponse.json({ result });
}

//추후 밑의 코드들은 다른 곳으로 옮길예정
interface MapType {
  total: () => PopularPortfolioImagesObjProps[];
  serviceplan: () => PopularPortfolioImagesObjProps[];
  webplan: () => PopularPortfolioImagesObjProps[];
  appplan: () => PopularPortfolioImagesObjProps[];
  webdesign: () => PopularPortfolioImagesObjProps[];
  appdesign: () => PopularPortfolioImagesObjProps[];
}

const Map: MapType = {
  total() {
    const sortedArray = popularPortfolioData.sort((a, b) => b.likes - a.likes);
    // 상위 좋아요 7개만 추출
    const topLikesPortfolio = sortedArray.slice(0, 7);
    return topLikesPortfolio;
  },
  serviceplan() {
    const filteredArray = popularPortfolioData.filter(
      (el) => el.category === "serviceplan"
    );
    return filteredArray;
  },
  webplan() {
    const filteredArray = popularPortfolioData.filter(
      (el) => el.category === "webplan"
    );
    return filteredArray;
  },
  appplan() {
    const filteredArray = popularPortfolioData.filter(
      (el) => el.category === "appplan"
    );
    return filteredArray;
  },
  webdesign() {
    const filteredArray = popularPortfolioData.filter(
      (el) => el.category === "webdesign"
    );
    return filteredArray;
  },
  appdesign() {
    const filteredArray = popularPortfolioData.filter(
      (el) => el.category === "appdesign"
    );
    return filteredArray;
  },
};

const getPortfolioInfo = (
  category: string
): PopularPortfolioImagesObjProps[] => {
  return Map[category as keyof MapType]();
};
