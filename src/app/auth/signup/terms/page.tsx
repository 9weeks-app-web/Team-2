"use client";
import React, { useState, useEffect, useCallback } from "react";
import { font_size, font_weight } from "@/styles/typography";
import CheckField from "./../../components/CheckField";
import InterestButton from "../../components/InterestButton";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { H2_M_20 } from "@/styles/stylesComponents/typographyComponents";

interface Agreement {
  name: string;
  label: string;
}
const agreements: Agreement[] = [
  { name: "require", label: "본인인증 약관 전체동의" },
  { name: "agreement1", label: "서비스 이용약관 동의" },
  { name: "agreement2", label: "개인정보 수집 이용 동의" },
  { name: "agreement3", label: "고유식별 정보처리 동의" },
  { name: "agreement4", label: "통신사 이용약관 동의" },
];
type CheckboxStates = Record<string, boolean>;
export default function Terms() {
  const initialState: CheckboxStates = agreements.reduce(
    (acc, cur) => ({ ...acc, [cur.name]: false }),
    {}
  );
  const [checkboxStates, setCheckboxStates] =
    useState<CheckboxStates>(initialState);
  const [isButtonActive, setButtonActive] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (name === "require") {
      const newStates = Object.fromEntries(
        agreements.map((agreement) => [agreement.name, checked])
      );
      setCheckboxStates(newStates);
    } else {
      setCheckboxStates({ ...checkboxStates, [name]: checked });
    }
  };
  const areEssentialAgreementsChecked = useCallback(
    () =>
      agreements
        .filter((agreement) => agreement.name === "require")
        .every((agreement) => checkboxStates[agreement.name]),
    [checkboxStates]
  );
  const router = useRouter();

  const handleButtonClick = () => {
    router.replace("/auth/signup/info");
  };

  useEffect(() => {
    const isActive = areEssentialAgreementsChecked();
    setButtonActive(isActive);
  }, [areEssentialAgreementsChecked]);
  return (
    <TermContainer>
      <Title>
        <H2_M_20>
          스팩폴리오에 오신 것을 환영합니다. <br />
          서비스 이용을 위해 아래의 약관 동의가 필요합니다
        </H2_M_20>
      </Title>

      <CheckboxContainer>
        {agreements.map(({ name, label }) => (
          <li key={name}>
            <CheckField
              name={name}
              id={name}
              checked={checkboxStates[name]}
              title={label}
              onChange={handleCheckboxChange}
            />
          </li>
        ))}
      </CheckboxContainer>
      <InterestButton
        size="lg"
        label="다음으로"
        variant={isButtonActive ? "active" : "disable"}
        $borderRadius
        onClick={handleButtonClick}
      />
    </TermContainer>
  );
}

const TermContainer = styled.div`
  button {
    margin: 80px 0px 150px 0px;
  }
`;
const Title = styled.div`
  margin: 36px 0px 48px 0px;
`;
const CheckboxContainer = styled.ul`
  li:first-child {
    font-size: var(${font_size.FONT_SIZE_20});
    font-weight: var(${font_weight.FONT_WEIGHT_700_B});
    margin-bottom: 48px;
    span {
      height: 20px;
    }
  }
  li:not(:last-child) {
    margin-bottom: 24px;
  }
`;
