import React, { useState } from "react";
import PageNavController from "@/components/Section/PageNavController";

const MyProject: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPage: number = 10; // 임의의 전체 페이지 수

  // 페이지 변경 함수
  const goToNextPage = () => {
    setCurrentPage((prev) => {
      return prev < totalPage - 1 ? prev + 1 : prev;
    });
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div>
      <PageNavController
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </div>
  );
};

export default MyProject;
