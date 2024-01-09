import { PopularProjectCardProps } from "@/types";
import { NextResponse } from "next/server";
import { PopularProjectData } from "@/constant/mock";
export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  const result = getProjectInfo(params.category);

  return NextResponse.json({ result });
}

//추후 밑의 코드들은 다른 곳으로 옮길예정
interface MapType {
  total: () => PopularProjectCardProps[];
  design: () => PopularProjectCardProps[];
  uxui: () => PopularProjectCardProps[];
  develop: () => PopularProjectCardProps[];
  plan: () => PopularProjectCardProps[];
  etc: () => PopularProjectCardProps[];
}

const Map: MapType = {
  total() {
    const sortedArray = PopularProjectData.sort((a, b) => b.views - a.views);
    // 상위 조회수 3개만 추출
    const topViewsProject = sortedArray.slice(0, 3);
    return topViewsProject;
  },
  design() {
    const filteredArray = PopularProjectData.filter(
      (el) => el.category === "design"
    );
    return filteredArray;
  },
  uxui() {
    const filteredArray = PopularProjectData.filter(
      (el) => el.category === "uxui"
    );
    return filteredArray;
  },
  develop() {
    const filteredArray = PopularProjectData.filter(
      (el) => el.category === "develop"
    );
    return filteredArray;
  },
  plan() {
    const filteredArray = PopularProjectData.filter(
      (el) => el.category === "plan"
    );
    return filteredArray;
  },
  etc() {
    const filteredArray = PopularProjectData.filter(
      (el) => el.category === "etc"
    );
    return filteredArray;
  },
};

const getProjectInfo = (category: string): PopularProjectCardProps[] => {
  return Map[category as keyof MapType]();
};
