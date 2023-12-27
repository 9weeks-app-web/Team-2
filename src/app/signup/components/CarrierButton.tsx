import React from "react";
import styled from "styled-components";

interface CarrierButtonProps {
  key: React.Key; 
  handleClick: (index: number) => void; 
  isSelected: boolean; 
}

export const CarrierButton: React.FC<CarrierButtonProps> = ({
  handleClick,
  isSelected,
  key,
}) => {
  return <div></div>;
};

const textCheckBox = styled.div`
  padding: 20px;
  width: 100%;
  border: 3px solid black;
  text-align: center;
  align-items: center;
`;

export default CarrierButton;
