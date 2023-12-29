import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
export const StyledRecruit = styled.div`
  background: #f9f9f9;
  padding: 47px 0px;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  margin-top: 80px;
`;
export const StyledRecruitListContainer = styled.section``;
export const StyledRecruitList = styled.ul`
  display: flex;
  gap: 20px;
  max-width: 1060px;
`;
export const StyledRecruitCard = styled.li`
  height: 178px;
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    border: 1px solid #ededed;
    background: #fff;
    padding: 14px 20px;
    height: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h3 {
    font-size: var(${font_size.FONT_SIZE_14});
    font-weight: var(${font_weight.FONT_WEIGHT_500_M});
    line-height: 140%;
    letter-spacing: -0.28px;
    display: block;
    width: 150px;
    height: 44px;
  }
  p,
  span {
    font-size: var(${font_size.FONT_SIZE_12});
    font-weight: var(${font_weight.FONT_WEIGHT_400_R});
  }
  p {
    color: var(${colors.NEUTRAL_30});
  }
`;
export const StyledTime = styled.span`
  border-radius: 4px;
  background: #ededed;
  padding: 4px 6px;
  width: fit-content;
`;
