import { flexColumn } from "@/components/Flex/flexStyle";
import { _evaluationKeywordList } from "@/constant/_[project]mockup";
import { recommendKeywordTagState } from "@/state/atom/atom";
import { colors } from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import KeywordCard from "../KeywordCard";
import {
  H1_SB_24,
  H2_M_20,
} from "@/styles/stylesComponents/typographyComponents";
import { useRecoilValue } from "recoil";

interface IdelProps {
  setPageStatus: (pageStatus: "idle" | "loading" | "complete") => void;
  onClose: () => void;
}
const Idel: React.FC<IdelProps> = ({ setPageStatus, onClose }) => {
  const data = useRecoilValue(recommendKeywordTagState);

  const handleSaveClick = async () => {
    if (data != null && Object.keys(data).length !== 0) {
      console.log(data);
      setPageStatus("loading");

      const fakeApiCall = () =>
        new Promise((resolve) => setTimeout(resolve, 3000));
      await fakeApiCall();
      setPageStatus("complete");

      //   onClose();
    } else {
      console.log(data);
      return;
    }
  };

  return (
    <>
      <CloseWrap>
        <CloseBtn onClick={onClose}> X</CloseBtn>
      </CloseWrap>
      <Inner>
        <HeaderWrap>
          <UserContainer>
            <TextBox>
              <H1_SB_24>
                <span className="primary80">나와 꼭 맞는 팀원</span>을 추천받아
                보세요.
              </H1_SB_24>
              <H2_M_20>
                선호하는 키워드를 <span className="primary80"> 최대 3개</span>{" "}
                선택해주세요.
              </H2_M_20>
            </TextBox>
          </UserContainer>
        </HeaderWrap>
        <KeywordWrap>
          {Object.entries(_evaluationKeywordList).map(([title, keywords]) => (
            <KeywordCard
              key={title}
              title={title}
              keywords={keywords}
              RecolieState={recommendKeywordTagState}
            />
          ))}
        </KeywordWrap>
        <SaveBtn
          onClick={handleSaveClick}
          $disabled={Object.keys(data).length == 0}
        >
          완료
        </SaveBtn>
      </Inner>
    </>
  );
};

export default Idel;

const Inner = styled.div`
  ${flexColumn}
  gap: 2.25rem;
`;

const HeaderWrap = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 32.5rem;
  gap: 0.75rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  & .primary80 {
    color: var(${colors.PRIMARY_80});
  }
`;

const KeywordWrap = styled.div`
  display: flex;
  width: 32.625rem;
  height: 25.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.25rem;
  overflow: auto;
`;

const SaveBtn = styled.div<{ $disabled: boolean }>`
  display: flex;
  width: 32.5rem;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
  background: ${(props) =>
    props.$disabled ? `var(${colors.NEUTRAL_5})` : `var(${colors.PRIMARY_70})`};
  color: ${(props) =>
    props.$disabled
      ? `var(${colors.NEUTRAL_40})`
      : `var(${colors.NEUTRAL_WHITE})`};
`;
const CloseBtn = styled.div`
  cursor: pointer;
`;

const CloseWrap = styled.div`
  width: 662px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
`;
