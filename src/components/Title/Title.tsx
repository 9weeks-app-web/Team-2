import styled from "styled-components";
import view from "../../../public/view.svg";
import Image from "next/image";
import Link from "next/link";
import { H1_B_24 } from "@/styles/stylesComponents/typographyComponents";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";
interface StyledHeaderProps {
  isColumn?: boolean;
  children?: React.ReactNode;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  gap: 12px;
  margin-bottom: 26px;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
  justify-content: ${({ isColumn }) => (isColumn ? "" : "space-between")};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  span {
    font-size: var(${font_size.FONT_SIZE_16});
    color: var(${colors.NEUTRAL_30});
    font-weight: var(${font_weight.FONT_WEIGHT_500_M});
  }
  p {
    font-size: var(${font_size.FONT_SIZE_18});
    font-weight: var(${font_weight.FONT_WEIGHT_400_R});
  }
`;

export const StyledCustomHeader = ({
  title,
  linkPath,
  children,
  isColumn,
}: {
  title: string;
  linkPath: string;
  children?: React.ReactNode;
  isColumn?: boolean;
}) => {
  return (
    <StyledHeader isColumn={isColumn}>
      <H1_B_24>{title}</H1_B_24>
      <div>
        <p>{children}</p>
        <Link href={linkPath}>
          <span>더 보기</span>

          <Image src={view} alt="더보기" width={20} height={20} />
        </Link>
      </div>
    </StyledHeader>
  );
};
