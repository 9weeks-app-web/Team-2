import { CardRadius } from "@/styles/stylesComponents/cardStyle";
import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { font_size, font_weight, line_height } from "@/styles/typography";
import { colors } from "@/styles/colors";
import { B2_M_12 } from "@/styles/stylesComponents/typographyComponents";
import { flexColumn } from "@/components/Flex/flexStyle";

const Section3Card: React.FC<{ project: Project }> = ({ project }) => {
  // D-Day 계산 함수
  const calculateDDay = (deadline: Date) => {
    const today = new Date();
    const timeDiff = deadline.getTime() - today.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return dayDiff >= 0 ? `D-${dayDiff}` : `D+${Math.abs(dayDiff)}`;
  };

  // D-Day 혹은 '모집시 마감' 표시

  const displayRecruitmentStatus = project.recruitmentStatus
    ? calculateDDay(project.recruitmentStatus)
    : "모집시 마감";
  return (
    <CardContainer>
      <Header>
        <Tag blueTag={true} text={displayRecruitmentStatus} />
        <Tag blueTag={true} text={project.recruitmentPeriod} />
      </Header>
      <Info>
        <Title>{project.title}</Title>
        <Desc>
          {/* 3글자 이상 ... 으로 처리   */}
          {project.description}
        </Desc>
      </Info>
      <MemberQuota>
        <B2_M_12 className="neutral50">모집 인원</B2_M_12>
        <TagContainer>
          {Object.entries(project.memberQuota).map(([role, count]) => (
            <Tag key={role} text={`${role} ${count}`} />
          ))}
          {/* <Tag text={project.memberQuota[0].toString()} /> */}
          {/* <Tag text={"디자이너 2"} /> */}
        </TagContainer>
      </MemberQuota>
      <Footer>
        <TextContainer>
          <B2_M_12 className="neutral50">현재 인원</B2_M_12>
          <B2_M_12>{`${project.currentMemberCount}/${project.totalMemberCount} `}</B2_M_12>
        </TextContainer>
        <TextContainer>
          <B2_M_12 className="neutral50">업무성향 매칭률</B2_M_12>
          <B2_M_12 className="primary80">{`${project.workTendencyMatchingRate}%`}</B2_M_12>
        </TextContainer>
      </Footer>
    </CardContainer>
  );
};

export default Section3Card;

const CardContainer = styled.div`
  display: flex;
  width: 15.625rem;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem;
  background: #fff;
  border-radius: 0.5rem;
  ${CardRadius}

  & .neutral50 {
    color: var(${colors.NEUTRAL_50});
  }
  & .primary80 {
    color: var(${colors.PRIMARY_80});
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
`;

const Info = styled.div`
  display: flex;
  height: 6.4375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const Title = styled.div`
  height: 2.75rem;
  flex: 1 0 0;
  font-size: var(${font_size.FONT_SIZE_16});
  font-weight: var(${font_weight.FONT_WEIGHT_500_M});
  color: var(${colors.NEUTRAL_90});
  line-height: var(${line_height.LINE_HEIGHT_140});
`;
const Desc = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 원하는 줄 수를 여기에 설정 */
  height: 3.1875rem;
  flex: 1 0 0;
  font-size: var(${font_size.FONT_SIZE_12});
  font-weight: var(${font_weight.FONT_WEIGHT_400_R});
  color: var(${colors.NEUTRAL_50});
  line-height: var(${line_height.LINE_HEIGHT_140});
  text-overflow: ellipsis;
  overflow: hidden;
`;

const MemberQuota = styled.div`
  ${flexColumn}
  align-items: flex-start;
  gap: 0.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;

  & {
    color: var(${colors.NEUTRAL_70});
  }
`;

const Footer = styled.div`
  display: flex;
  width: 13.1875rem;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.125rem;
`;
