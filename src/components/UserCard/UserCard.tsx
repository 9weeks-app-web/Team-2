import { UserCardWrapper } from "./UserCardStyled";
import Image from "next/image";
interface UserCardProps {
  username: string;
  avatarSrc: string;
  job: string;
}

const UserCard: React.FC<UserCardProps> = ({ username, avatarSrc, job }) => {
  return (
    <UserCardWrapper>
      <Image
        src={avatarSrc}
        alt={`${username} 프로필 이미지`}
        width={48}
        height={48}
        objectFit="contain"
      />

      <div>
        <p>{username}</p>
        <span>{job}</span>
      </div>
    </UserCardWrapper>
  );
};

export default UserCard;
