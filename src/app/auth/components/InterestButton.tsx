import React from "react";
import { colors } from "@/styles/colors";
import styled, { css } from "styled-components";
import { font_size, font_weight } from "@/styles/typography";
import {
  B2_M_14,
  H2_M_20,
  H2_SB_20,
} from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
const Button = styled.button<{
  $isActive?: boolean;
  $disabled?: boolean;
  $sizeStyle?: ReturnType<typeof css>;
  $variantStyle?: ReturnType<typeof css>;
  $borderRadius?: string;
  $margin?: string;
  $fontWeight?: string | undefined;
  imagePath?: string;
  imageSize?: string;
}>`
  ${(props) => props.$variantStyle};
  ${(props) => props.$sizeStyle}
  display: inline-block;
  text-align: center;
  border-radius: ${({ $borderRadius }) => $borderRadius + "px"};
  margin: ${({ $margin }) => $margin};

  font-weight: ${({ $fontWeight }) =>
    $fontWeight === "true"
      ? `var(${font_weight.FONT_WEIGHT_600_SB})`
      : `var(${font_weight.FONT_WEIGHT_500_M})`};
`;

interface InterestButtonProps {
  label: string;
  image?: string;
  $isActive?: boolean;
  onClick?: () => void;
  $disabled?: boolean;
  $borderRadius?: string;
  $fontWeight?: string | undefined;
  $margin?: string;
  imagePath?: string;
  imageSize?: string;
  size: "sm" | "md" | "lg" | "ss" | "m" | "default";
  variant: "disable" | "default" | "active";
}
const SIZES: { [key: string]: ReturnType<typeof css> } = {
  sm: css`
    width: 120px;
    height: 40px;
  `,
  md: css`
    width: 170px;
    height: 56px;
  `,
  lg: css`
    width: 520px;
    height: 68px;
  `,
  ss: css`
    padding: 10px 14px;
  `,
  m: css`
    width: 147px;
    height: 40px;
  `,
  default: css`
    width: 100%;
    padding: 14px;
  `,
};

const VARIANTS: { [key: string]: ReturnType<typeof css> } = {
  default: css`
    border: 1px solid var(${colors.PRIMARY_50});
    color: var(${colors.PRIMARY_50});
    background-color: var(${colors.NEUTRAL_WHITE});
  `,
  active: css`
    border: 1px solid var(${colors.PRIMARY_50});
    color: var(${colors.NEUTRAL_WHITE});
    background-color: var(${colors.PRIMARY_70});
  `,
  disable: css`
    color: var(${colors.NEUTRAL_40});
    background-color: var(${colors.NEUTRAL_5});
    pointer-events: none;
    cursor: "not-allowed";
    &:not(:disabled):active {
      background-color: #0059ff;
    }
  `,
};

const InterestButton: React.FC<InterestButtonProps> = ({
  label,
  $isActive,
  onClick,
  $disabled,
  size,
  variant,
  $borderRadius,
  $margin,
  imagePath,
  imageSize,
  $fontWeight,
}) => {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  let TypographyComponent;

  switch (size) {
    case "sm":
      TypographyComponent = B2_M_14;
      break;
    case "md":
      TypographyComponent = H2_SB_20;
      break;
    case "lg":
      TypographyComponent = H2_M_20;
      break;
    default:
      TypographyComponent = B2_M_14;
  }
  const parsedImageSize = imageSize ? parseInt(imageSize, 10) : undefined;
  const ImageStyle = imagePath ? (
    <Image
      src={imagePath}
      alt={label}
      width={parsedImageSize}
      height={parsedImageSize}
    />
  ) : null;

  return (
    <>
      <Button
        onClick={onClick}
        $isActive={$isActive}
        $sizeStyle={sizeStyle}
        $disabled={$disabled}
        $variantStyle={variantStyle}
        $borderRadius={$borderRadius}
        $margin={$margin}
        $fontWeight={$fontWeight}
      >
        {ImageStyle}

        <TypographyComponent>{label}</TypographyComponent>
      </Button>
    </>
  );
};

export default InterestButton;
