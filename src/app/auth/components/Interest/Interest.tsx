"use client";
import React, { useState } from "react";
import InterestList from "./interestList";
import InterestButtonGroup from "./InterestButtonGroup";
import { interestsData, InterestCategory } from "@/constant/interests";
import InterestButton from "../InterestButton";
import styled from "styled-components";
import { useRouter } from "next/navigation";
export default function Interest() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [activeInterest, setActiveInterest] =
    useState<InterestCategory>("design");
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const handleButtonClick = (selectedInterest: InterestCategory) => {
    setAllSelected(false);
    setActiveInterest(selectedInterest);
  };

  const handleInterestItemClick = (clickedItem: string) => {
    const updatedInterests = selectedInterests.includes(clickedItem)
      ? selectedInterests.filter((item) => item !== clickedItem)
      : [...selectedInterests, clickedItem];

    setSelectedInterests(updatedInterests);
  };

  const handleAllButtonClick = () => {
    if (selectedInterests.length === interestsData[activeInterest].length) {
      setSelectedInterests([]);
      setAllSelected(false);
    } else {
      setSelectedInterests(interestsData[activeInterest]);
      setAllSelected(true);
    }
  };
  const router = useRouter();
  const handleConfirmButtonClick = () => {
    router.replace("/auth/signup/complete");
    if (activeInterest) {
      const selectedItems = {
        [activeInterest]: selectedInterests,
      };
      console.log("Selected Items: ", selectedItems);
    }
  };

  return (
    <Container>
      <InterestButtonGroup
        activeInterest={activeInterest}
        handleButtonClick={handleButtonClick}
      />

      <InterestList
        interests={interestsData[activeInterest || "design"]}
        selectedInterests={selectedInterests}
        handleInterestItemClick={handleInterestItemClick}
        handleAllButtonClick={handleAllButtonClick}
        allSelected={allSelected}
      />

      <InterestButton
        onClick={handleConfirmButtonClick}
        label="다음으로"
        size="lg"
        variant="active"
        $borderRadius="10"
        $margin="88px 218px"
      ></InterestButton>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
