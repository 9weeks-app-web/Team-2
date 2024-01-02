import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import {
  B1_M_16,
  B2_M_12,
} from "@/styles/stylesComponents/typographyComponents";
import styled from "styled-components";

// TypeScript 인터페이스 정의
interface UserProfileProps {
  imageUrl: string;
  userName: string;
  onFollow: () => void;
}

// UserProfile 컴포넌트
const UserProfile: React.FC<UserProfileProps> = ({
  imageUrl,
  userName,
  onFollow,
}) => {
  return (
    <UserProfileContainer>
      <ProfileImage src={imageUrl} alt="" />
      <TextBox>
        <B1_M_16>{userName}</B1_M_16>
        <B2_M_12 className="gray">프론트 엔드</B2_M_12>
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

// 이미지 스타일
const ProfileImage = styled.img`
  border-radius: 50%;
  margin-right: 0.75rem;
  background-color: #b3b3b3;
  width: 48px;
  height: 48px;
  padding: 0px, 15px, 0px, 16px;
  border-radius: 100px;
  border: 2px;
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
