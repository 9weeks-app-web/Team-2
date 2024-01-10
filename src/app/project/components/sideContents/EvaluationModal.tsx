// EvaluationModal.tsx
import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Avatar from "../../../../components/User/Avatar";
import {
  B2_M_12,
  H3_R_18,
  H3_SB_18,
} from "@/styles/stylesComponents/typographyComponents";
import KeywordCard from "../common/KeywordCard";
import { _evaluationKeywordList } from "@/constant/_[project]mockup";
import { useRecoilValue } from "recoil";
import { evaluationKeywordTagState } from "@/state/atom/atom";
import { font_weight } from "@/styles/typography";
import { Member } from "../../types/Member";
interface EvaluationModalProps {
  projectName: string;
  member: Member;
  onClose: () => void;
}

const EvaluationModal: React.FC<EvaluationModalProps> = ({
  onClose,
  member,
  projectName,
}) => {
  const data = useRecoilValue(evaluationKeywordTagState);
  const handleSaveClick = () => {
    if (data != null && Object.keys(data).length !== 0) {
      console.log(data);
      onClose();
    } else {
      console.log(data);
      return;
    }
    //  유저데이터 안에 저장되게끔 만들어야됨
  };

  return (
    <ModalBackground>
      <ModalContent>
        <CloseBtn onClick={onClose}>X</CloseBtn>
        <HeaderWrap>
          <UserContainer>
            <Avatar size="3.75rem" imgPath={member.avatarImage}></Avatar>
            <TextBox>
              <B2_M_12 className="neutral50">
                {projectName} | {member.role}
              </B2_M_12>
              <Title>
                <H3_SB_18>{member.name}님에게</H3_SB_18>
                <H3_R_18>
                  어울리는 키워드를 <span className="bold"> 최대 3개</span>{" "}
                  선택해주세요.
                </H3_R_18>
              </Title>
            </TextBox>
          </UserContainer>
        </HeaderWrap>
        <KeywordWrap>
          {Object.entries(_evaluationKeywordList).map(([title, keywords]) => (
            <KeywordCard
              key={title}
              title={title}
              keywords={keywords}
              RecolieState={evaluationKeywordTagState}
            />
          ))}
        </KeywordWrap>
        <SaveBtn
          onClick={handleSaveClick}
          $disabled={Object.keys(data).length == 0}
        >
          완료
        </SaveBtn>
      </ModalContent>
    </ModalBackground>
  );
};

export default EvaluationModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  border-radius: 1.5rem;
  background: var(${colors.NEUTRAL_WHITE});
  display: flex;
  width: 44.375rem;
  padding: 1.5rem 1.5rem 2.25rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;
`;

const HeaderWrap = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`;

const CloseBtn = styled.div`
  width: 41.375rem;
  display: flex;
  justify-content: end;
  cursor: pointer;
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
  & .neutral50 {
    color: var(${colors.NEUTRAL_50});
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;

  gap: 0.25rem;

  & .bold {
    font-weight: var(${font_weight.FONT_WEIGHT_600_SB});
  }
`;

const KeywordWrap = styled.div`
  display: flex;
  width: 31.625rem;
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
