// Message.js 파일

import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";

interface MessageProps {
  isSuccess?: boolean;
  children: React.ReactNode;
}
const Message = styled.p<MessageProps>`
  padding-top: 12px;
  font-size: var(${font_size.FONT_SIZE_16});
  font-weight: var(${font_weight.FONT_WEIGHT_400_R});
  color: ${(props) =>
    props.isSuccess
      ? `var(${colors.SYSTEM_SUCCESS})`
      : `var(${colors.SYSTEM_WARNING})`};
`;

const MessageComponent: React.FC<MessageProps> = ({ isSuccess, children }) => {
  return <Message isSuccess={isSuccess}>{children}</Message>;
};

export default MessageComponent;
