import { colors } from "@/styles/colors";
import React, { useState } from "react";
import styled from "styled-components";
import { _evaluationKeywordList } from "@/constant/_[project]mockup";
import Idel from "./modal/Idel";
import Loading from "./modal/Loading";
import Complete from "./modal/Complete";
import { flexColumn } from "@/components/Flex/flexStyle";
interface RecommenMemberModalProps {
  userName: string;
  onClose: () => void;
}

const RecommenMemberModal: React.FC<RecommenMemberModalProps> = ({
  onClose,
  userName,
}) => {
  // 페이지 상태 추가 (idle, loading, complete)
  const [pageStatus, setPageStatus] = useState<"idle" | "loading" | "complete">(
    "idle"
  );

  return (
    <ModalBackground>
      <ModalContent>
        {pageStatus === "idle" && (
          <Idel onClose={onClose} setPageStatus={setPageStatus} />
        )}
        {pageStatus === "loading" && <Loading userName={userName} />}
        {pageStatus === "complete" && <Complete userName={userName} />}
      </ModalContent>
    </ModalBackground>
  );
};

export default RecommenMemberModal;

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
  border-radius: 1.5rem;
  background: var(${colors.NEUTRAL_WHITE});
  height: 710px;
  width: 44.375rem;
  padding: 1.5rem 1.5rem 2.25rem 1.5rem;
  ${flexColumn}
  align-items: center;
  overflow: hidden;
`;
