// PopRecruitItem.tsx
import Link from "next/link";
import { StyledRecruitCard, StyledTime } from "./PopRecruitStyled";

type RecruitItem = {
  id: number;
  endDate: Date;
  title: string;
  position: string;
  company: string;
};

type RecruitItemProps = {
  item: RecruitItem;
};

const PopRecruitItem: React.FC<RecruitItemProps> = ({ item }) => {
  const getDDay = (targetDate: Date) => {
    const today = new Date();
    const timeDiff = targetDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return `D-${daysDiff}`;
  };

  const dDay = getDDay(item.endDate);

  return (
    <StyledRecruitCard>
      <Link href={"#"}>
        <div>
          <StyledTime>{dDay}</StyledTime>
          <h3>{item.title}</h3>
          <span>#{item.position}</span>
        </div>
        <p>{item.company}</p>
      </Link>
    </StyledRecruitCard>
  );
};

export default PopRecruitItem;
