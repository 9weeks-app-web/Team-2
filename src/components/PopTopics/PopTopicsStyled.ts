import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";

export const StyledPopTopicListContainer = styled.section`
  margin-top: 54px;
`;
export const StyledSubtitle = styled.h3`
  margin-bottom: 12px;
  font-size: var(${font_size.FONT_SIZE_24});
  font-weight: 300;
  letter-spacing: -0.48px;
`;
export const StyledPopTopicList = styled.ul`
  display: flex;
  gap: 20px;
`;
export const StyledPopTopicsItem = styled.li`
  border-radius: 8px;
  border: 1px solid #ededed;
  background: #fff;
  a {
    display: flex;
    padding: 20px;
    flex-direction: column;
    gap: 18px;
  }
`;
export const StyledTopicInfo = styled.div``;
export const StyledTopicDesc = styled.ul`
  gap: 12px;
  display: flex;
  -webkit-box-pack: start;
  font-size: var(${font_size.FONT_SIZE_12});
  font-weight: var(${font_weight.FONT_WEIGHT_400_R});
  letter-spacing: -0.24px;
  line-height: 19px;
  img {
    border-radius: 50%;
    background-color: gray;
  }
  li {
    display: flex;
    -webkit-box-pack: start;
    align-items: center;
    gap: 6px;

    &:nth-child(3) {
      width: 100%;
      -webkit-box-pack: end;
      justify-content: flex-end;
      color: var(${colors.NEUTRAL_30});
    }
  }
`;
export const StyledTagGroup = styled.div`
  display: flex;
  gap: 4px;
  label {
    padding: 6px 8px;
    border-radius: 8px;
    border: 1px solid #ededed;
    background: #ededed;
    color: var(${colors.NEUTRAL_30});
    font-size: var(${font_size.FONT_SIZE_12});
    font-weight: var(${font_weight.FONT_WEIGHT_500_M});
    letter-spacing: -0.24px;
  }
`;
export const StyledTopicBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 8px;

  div {
    width: 300px;
    h3 {
      letter-spacing: -0.32px;
      font-weight: var(${font_weight.FONT_WEIGHT_500_M});
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: var(${colors.NEUTRAL_30});
      font-size: var(${font_size.FONT_SIZE_14});
      font-weight: var(${font_weight.FONT_WEIGHT_400_R});
      line-height: 140%;
      letter-spacing: -0.24px;
      height: 42px;
    }
  }
`;
