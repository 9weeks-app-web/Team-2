import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import {
  B1_M_16,
  B2_M_12,
} from "@/styles/stylesComponents/typographyComponents";
import styled from "styled-components";
import Avatar from "./Avatar";

// TypeScript 인터페이스 정의
interface UserProfileProps {
  member: Member;
  onFollow: () => void;
}

// UserProfile 컴포넌트
const UserProfile: React.FC<UserProfileProps> = ({ member, onFollow }) => {
  return (
    <UserProfileContainer>
      <Avatar imgPath={member.avatarImage} />
      <TextBox>
        <B1_M_16>{member.name}</B1_M_16>
        <B2_M_12 className="gray">{member.role}</B2_M_12>
      </TextBox>
      <EvaluationBtn onClick={onFollow}>평가하기</EvaluationBtn>
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

// 사용자 이름 스타일
// const UserName = styled.span`
//   flex-grow: 1;
// `;

// 팔로우 버튼 스타일
const EvaluationBtn = styled.button`
  padding: 0.5rem 0.62rem;
  border: 1px solid var(${colors.BORDER_COLOR});
  background-color: var(${colors.NEUTRAL_WHITE});
  color: var(${colors.NEUTRAL_30});
  border-radius: 0.5rem;
  cursor: pointer;
`;
