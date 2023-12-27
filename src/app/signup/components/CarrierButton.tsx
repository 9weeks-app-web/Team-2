import React from "react";
import styled from "styled-components";

interface CarrierButtonProps {
  key: React.Key; // React 요소의 Key
  handleClick: (index: number) => void; // 클릭 핸들러 함수
  isSelected: boolean; // 선택 상태
}

export const CarrierButton: React.FC<CarrierButtonProps> = ({
  handleClick,
  isSelected,
  key,
}) => {
  return <textCheckBox />;
};

const textCheckBox = styled.div`
  padding: 20px;
  width: 100%;
  border: 3px solid black;
  text-align: center;
  align-items: center;
`;

export default CarrierButton;
