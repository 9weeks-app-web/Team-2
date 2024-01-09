import {
  B1_M_16,
  B2_M_14,
} from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Tag } from "../Tag";
interface UserCardProps {
  userName: string;
  avatarSrc: string;
  userJob: string;
  hotTag?: boolean;
}

const UserCard = ({ userName, avatarSrc, userJob, hotTag }: UserCardProps) => {
  return (
    <UserCardContainer>
      <ImageCircle
        src={avatarSrc || "https://placehold.co/48x48/png"}
        alt={`${userName} 프로필 이미지`}
        width={48}
        height={48}
      />
      <FlexBoxRow>
        <FlexBoxCol>
          <UserName>{userName}</UserName>
          <UserJob>{userJob}</UserJob>
        </FlexBoxCol>
        {hotTag && (
          <Tag $setColor="--Red-500, #FB5151" $setBgColor="--Red-50, #FFEFEF">
            HOT
          </Tag>
        )}
      </FlexBoxRow>
    </UserCardContainer>
  );
};
const ImageCircle = styled(Image)`
  border-radius: 50%;
  margin-right: 12px;
  object-fit: contain;
`;

const UserCardContainer = styled.div`
  display: flex;
  margin-bottom: 18px;
`;
const FlexBoxCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexBoxRow = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: flex-start;
`;

const UserName = styled(B1_M_16)`
  color: var(${colors.NEUTRAL_90});
`;

const UserJob = styled(B2_M_14)`
  color: var(${colors.NEUTRAL_40});
`;
