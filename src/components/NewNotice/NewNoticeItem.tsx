import devImg from "../../../public/Dev_Thumnail_FrontEnd-Engineering.png";

import {
  StyledTextGroup,
  StyledLink,
  StyledImage,
  StyledImageWrapper,
  StyledInfoGroup,
  StyledTextHeaderGroup,
} from "./NewNoticeStyled";

type Props = {
  imageUrl: string;
  imageAlt: string;
  label: string;
  heading: string;
  paragraph: string;
  time: string;
};

export const NewNoticeItem = ({
  imageUrl,
  imageAlt,
  label,
  heading,
  paragraph,
  time,
}: Props) => {
  return (
    <StyledLink href={"#"}>
      <StyledImageWrapper>
        <StyledImage src={devImg} alt={imageAlt} />
      </StyledImageWrapper>
      <StyledTextGroup>
        <StyledTextHeaderGroup>
          <label>{label}</label>
          <h2>{heading}</h2>
        </StyledTextHeaderGroup>
        <StyledInfoGroup>
          <p>{paragraph}</p>
          <p>{time}</p>
        </StyledInfoGroup>
      </StyledTextGroup>
    </StyledLink>
  );
};
