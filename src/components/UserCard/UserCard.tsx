import { UserCardProps } from "@/types";
import Image from "next/image";
import styled from "styled-components";

/**
 * @component
 * @example 유저의 이미지만 렌더링
 * <TestUserCard
 *  onlyAvatar
 *  avatarSrc="/"
 *  avatarSize={15}
 * />
 * @example 이미지, 이름 , 직업 모두 렌더링
 * userName, userJob은 상위요소에서 스타일드 컴포넌트로 Props 넘겨줘야함
 *  <TestUserCard
    avatarSrc=""
    $flexDirection="row"
    $flexGap="4px"
    avatarSize={62}
    userName={<UserName>홍길동</UserName>}
    userJob={<UserJob>프론트엔드</UserJob>}
    />
    
 * @param avatarSize  Ex) avatarSize={12} => 12x12
 * @param $flexDirection row 선택시 => Row(avatar, (FlexGap) ,Col(userName, userJob))
 * @param $flexDirection column 선택시 => Col(avatar,(FlexGap), usename,(FlexGap), userjob)
 * @param $flexGap Ex) "12px"
 *
 */
export const UserCard = ({
  userName,
  avatarSrc,
  avatarSize,
  userJob,
  $flexDirection,
  $flexGap,
  onlyAvatar = false,
}: UserCardProps) => {
  if (onlyAvatar) {
    return (
      <ImageCircle
        width={avatarSize}
        height={avatarSize}
        src={
          avatarSrc || `https://placehold.co/${avatarSize}x${avatarSize}/png`
        }
        alt="프로필 이미지"
      />
    );
  }
  return (
    <UserCardContainer $flexDirection={$flexDirection} $flexGap={$flexGap}>
      <ImageCircle
        src={
          avatarSrc || `https://placehold.co/${avatarSize}x${avatarSize}/png`
        }
        alt="프로필 이미지"
        width={avatarSize}
        height={avatarSize}
      />
      {$flexDirection === "row" && (
        <FlexBoxRow>
          <FlexBoxCol>
            {userName}
            {userJob}
          </FlexBoxCol>
        </FlexBoxRow>
      )}
      {$flexDirection === "column" && (
        <>
          {userName}
          {userJob}
        </>
      )}
    </UserCardContainer>
  );
};
const ImageCircle = styled(Image)`
  border-radius: 50%;
  object-fit: contain;
`;

const UserCardContainer = styled.div<{
  $flexDirection?: string;
  $flexGap?: string;
}>`
  width: fit-content;
  align-items: ${(props) =>
    props.$flexDirection === "column" ? "center" : ""};
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => props.$flexGap};
`;
const FlexBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FlexBoxRow = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;
