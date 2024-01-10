"use clinet";
import styled from "styled-components";
import InterestButton from "../../components/InterestButton";
interface InterestListProps {
  interests: string[];
  selectedInterests: string[];
  allSelected: boolean;
  handleInterestItemClick: (clickedItem: string) => void;
  handleAllButtonClick: () => void;
}

const InterestList: React.FC<InterestListProps> = ({
  interests,
  selectedInterests,
  handleInterestItemClick,
  handleAllButtonClick,
  allSelected,
}) => {
  return (
    <BtnList>
      <InterestButton
        size="ss"
        onClick={handleAllButtonClick}
        $isActive={allSelected}
        label="전체"
        variant={allSelected ? "active" : "default"}
        $borderRadius="50"
      />
      {interests.map((item) => (
        <li key={item}>
          <InterestButton
            size="ss"
            onClick={() => handleInterestItemClick(item)}
            variant={selectedInterests.includes(item) ? "active" : "default"}
            label={item}
            $borderRadius="50"
          />
        </li>
      ))}
    </BtnList>
  );
};

export default InterestList;

const BtnList = styled.ul`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 24px 11px;
`;
