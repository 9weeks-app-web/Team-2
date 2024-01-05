import { colors } from "@/styles/colors";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import React, { useState } from "react";
import styled, { css } from "styled-components";

interface FloatingBtnProps {
  title: string;
}

const FloatingBtn: React.FC<FloatingBtnProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFloatingBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <FloatingContainer>
      <CreateProject isOpen={isOpen}>
        <B2_M_14>{title}</B2_M_14>
      </CreateProject>

      {/* 아이콘 넣으면됨 */}
      <Button onClick={toggleFloatingBtn} isOpen={isOpen}>
        +
      </Button>
    </FloatingContainer>
  );
};

export default FloatingBtn;

const FloatingContainer = styled.div`
  position: fixed;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  bottom: 5rem;
  right: 5.25rem;
`;
const Button = styled.button<{ isOpen: boolean }>`
  padding: 0.625rem;
  gap: 0.625rem;

  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  color: white;
  border: none;
  cursor: pointer;
  background: var(${colors.PRIMARY_70});
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.14);
  font-size: 1.5rem;
  z-index: 1000;

  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
  transition: transform 0.3s ease-in-out;
`;

const CreateProject = styled.div<{ isOpen: boolean }>`
  display: flex;
  height: 3.5rem;
  padding: 0rem 1.5rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.625rem;
  border-radius: 25rem;
  border: 1px solid var(${colors.PRIMARY_70});
  background: var(${colors.BACKGROUND_BLUE});
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.14);
  cursor: pointer;

  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: opacity 0.2s ease-in-out, transform 0.3s ease-in-out;
`;
