"use client";
import React from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";

import { colors } from "@/styles/colors";
interface ProgressTrackerProps {
  steps: string[];
  stepNames: string[];
}

const Progress = ({ steps, stepNames }: ProgressTrackerProps) => {
  const pathname = usePathname();

  return (
    <StepsContainer>
      {steps.map((step, index) => {
        const isactiv = pathname.includes(step);
        return (
          <Step key={index}>
            <StepNumber $isActive={isactiv}>{index + 1}</StepNumber>
            <StepName $isActive={isactiv}>{stepNames[index]}</StepName>
            {index < steps.length - 1 && <ProgressIcon />}
          </Step>
        );
      })}
    </StepsContainer>
  );
};

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(${colors.STROKE_10});
  padding-bottom: 18px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const StepNumber = styled.div<{ $isActive: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isActive
      ? `var(${colors.PRIMARY_70});`
      : `var(${colors.NEUTRAL_30});`};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  color: white;
`;

const StepName = styled.div<{ $isActive: boolean }>`
  font-size: 14px;
  color: ${(props) =>
    props.$isActive
      ? `var(${colors.NEUTRAL_90});`
      : `var(${colors.NEUTRAL_30});`};
`;

const ProgressIcon = styled.div`
  width: 14px;
  height: 14px;
  background-image: url("/authImg/next.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 10px;
  margin-right: 10px;
`;
export default Progress;
