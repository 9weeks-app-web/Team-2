import UserCard from "../UserCard/UserCard";
import Link from "next/link";
import Image from "next/image";
import {
  StyledPopTopicsItem,
  StyledTopicInfo,
  StyledTopicDesc,
  StyledTagGroup,
  StyledTopicBody,
} from "./PopTopicsStyled";
interface PopTopicsItemProps {
  username: string;
  occupation: string;
  profileImage: string;
  tag: string;
  title: string;
  description: string;
  likes: number;
  views: number;
  createdAt: string;
}

const PopTopicsItem: React.FC<PopTopicsItemProps> = ({
  username,
  occupation,
  profileImage,
  tag,
  title,
  description,
  likes,
  views,
  createdAt,
}) => {
  const dateDiff = (createdAt: string) => {
    const date = new Date(createdAt);
    const diffInMilliseconds = Date.now() - date.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

    if (diffInMinutes < 1) {
      return "방금 전";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInMinutes < 1440) {
      const diffInHours = Math.floor(diffInMinutes / 60);
      return `${diffInHours}시간 전`;
    } else {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}. ${month < 10 ? `0${month}` : month}. ${
        day < 10 ? `0${day}` : day
      }.`;
    }
  };

  const convertedDate = dateDiff(createdAt);

  return (
    <StyledPopTopicsItem>
      <Link href={"#"}>
        <UserCard username={username} avatarSrc="" job={occupation} />
        <StyledTopicInfo>
          <StyledTagGroup>
            {/* 임시 */}
            <label>#{tag}</label>
            <label>#{tag}</label>
            <label>#{tag}</label>
          </StyledTagGroup>
          <StyledTopicBody>
            <div>
              <h3>{title}</h3>
            </div>
            <div>
              <p>{description}</p>
            </div>
            <StyledTopicDesc>
              <li>
                <Image src={""} width={20} height={20} alt="좋아요 수" />
                <span>{likes}</span>
              </li>
              <li>
                <Image src={""} width={20} height={20} alt="조회 수" />
                <span>{views}</span>
              </li>
              <li>{convertedDate}</li>
            </StyledTopicDesc>
          </StyledTopicBody>
        </StyledTopicInfo>
      </Link>
    </StyledPopTopicsItem>
  );
};

export default PopTopicsItem;
