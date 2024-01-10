import { colors } from "@/styles/colors";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface FilterProps {
  filterList: Filter[];
}

const Filter = ({ filterList }: FilterProps) => {
  return (
    <FilterContainer>
      <FilterButton>
        <Image
          src={"/icons/filter.svg"}
          alt={"filter"}
          width={14}
          height={14}
        ></Image>
        <B2_M_14 className="color">필터</B2_M_14>
      </FilterButton>
      {filterList.map((item) => {
        return (
          <FilterButton key={item.id}>
            <B2_M_14>{item.title}</B2_M_14>
            <Image
              src={"/icons/down_arrow.svg"}
              alt={"down"}
              width={14}
              height={14}
            ></Image>
          </FilterButton>
        );
      })}
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const FilterButton = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.625rem;
  border: 1px solid var(--Primary-50, #7facff);
  background: var(--Neutral-white, #fff);
  cursor: pointer;

  & {
    color: var(${colors.PRIMARY_50});
  }
`;
