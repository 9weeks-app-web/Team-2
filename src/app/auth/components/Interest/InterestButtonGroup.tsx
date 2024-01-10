"use clinet";
import styled from "styled-components";
import InterestButton from "../../components/InterestButton";
import { InterestCategory } from "@/constant/interests";

interface InterestButtonGroupProps {
  activeInterest: InterestCategory;
  handleButtonClick: (selectedInterest: InterestCategory) => void;
}

const InterestButtonGroup: React.FC<InterestButtonGroupProps> = ({
  activeInterest,
  handleButtonClick,
}) => {
  const interestLabels: { [key in InterestCategory]: string } = {
    design: "디자인",
    planning: "기획",
    development: "개발",
  };

  return (
    <BtnGroup>
      {Object.keys(interestLabels).map((key) => {
        const interestKey = key as InterestCategory;
        return (
          <InterestButton
            $borderRadius="50"
            key={interestKey}
            label={interestLabels[interestKey]}
            variant={activeInterest === interestKey ? "active" : "default"}
            onClick={() => handleButtonClick(interestKey)}
            size="md"
          />
        );
      })}
    </BtnGroup>
  );
};

export default InterestButtonGroup;

const BtnGroup = styled.div`
  width: 644px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  margin: 80px 55px;
`;
