import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";
// width: 2.25rem;
//     height: 2.25rem;
//     border-radius: 50%;
//     background-color: white;
//     overflow: hidden;
//     object-fit: contain;
//     -webkit-flex-shrink: 0;
//     -ms-flex-negative: 0;
//     flex-shrink: 0;

export const UserCardWrapper = styled.div`
  display: flex;
  gap: 12px;
  font-weight: var(${font_weight.FONT_WEIGHT_500_M});

  /* 기존 스타일 */
  img {
    display: inline-block;
    border-radius: 50%;
    background-color: gray; // 임시
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  span {
    font-size: var(${font_size.FONT_SIZE_14});
    color: var(${colors.NEUTRAL_30});
  }
`;

// p,
// span {
//   font-size: var(${font_size.FONT_SIZE_12});
//   font-weight: var(${font_weight.FONT_WEIGHT_400_R});
// }
// p {
//   color: var(${colors.NEUTRAL_30});
// }
