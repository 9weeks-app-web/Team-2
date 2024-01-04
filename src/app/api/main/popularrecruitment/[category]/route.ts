import { PopularRecruitmentObjProps } from "@/types";
import { NextResponse } from "next/server";
import { recruitData } from "@/constant/mock";
export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  const result = getRecruitmentInfo(params.category);

  return NextResponse.json({ result });
}

//추후 밑의 코드들은 다른 곳으로 옮길예정
interface MapType {
  planner: () => PopularRecruitmentObjProps[];
  designer: () => PopularRecruitmentObjProps[];
  frontend: () => PopularRecruitmentObjProps[];
  backend: () => PopularRecruitmentObjProps[];
}

const Map: MapType = {
  planner() {
    const filteredArray = recruitData.filter((el) => el.category === "planner");
    return filteredArray;
  },
  designer() {
    const filteredArray = recruitData.filter(
      (el) => el.category === "designer"
    );
    return filteredArray;
  },
  frontend() {
    const filteredArray = recruitData.filter(
      (el) => el.category === "frontend"
    );
    return filteredArray;
  },
  backend() {
    const filteredArray = recruitData.filter((el) => el.category === "backend");
    return filteredArray;
  },
};

const getRecruitmentInfo = (category: string): PopularRecruitmentObjProps[] => {
  return Map[category as keyof MapType]();
};
