import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import {
  B1_M_16,
  B2_M_12,
} from "@/styles/stylesComponents/typographyComponents";
import styled from "styled-components";
import Avatar from "../../../../components/User/Avatar";
import { useState } from "react";
import EvaluationModal from "./EvaluationModal";
import { Member } from "../../types/Member";

interface UserProfileProps {
  projectName: string;
  member: Member;
  handleEvaluation: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  member,
  handleEvaluation,
  projectName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <UserProfileContainer>
      <Avatar imgPath={member.avatarImage} />
      <TextBox>
        <B1_M_16>{member.name}</B1_M_16>
        <B2_M_12 className="gray">{member.role}</B2_M_12>
      </TextBox>
      <EvaluationBtn onClick={handleOpenModal}>
        <B2_M_12 className="font">평가하기</B2_M_12>
      </EvaluationBtn>
      {isModalOpen && (
        <EvaluationModal
          onClose={handleCloseModal}
          member={member}
          projectName={projectName}
        />
      )}
    </UserProfileContainer>
  );
};

export default UserProfile;
// 사용자 프로필 컨테이너
const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextBox = styled.div`
  flex-grow: 1;
  ${flexColumn}
  gap: 0.25rem;
`;

// 평가버튼
const EvaluationBtn = styled.button`
  padding: 0.5rem 0.62rem;
  border: none;
  background-color: var(${colors.PRIMARY_10});
  color: var(${colors.PRIMARY_80});
  border-radius: 0.5rem;
  cursor: pointer;
  & .font {
    font-family: "PTD";
  }
`;
