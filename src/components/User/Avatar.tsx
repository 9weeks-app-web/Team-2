import React from "react";
import styled from "styled-components";

interface AvatarProps {
  imgPath: string;
  size?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imgPath, size = "3rem" }) => {
  return (
    <AvatarContainer src={imgPath} alt="avatar" $size={size}></AvatarContainer>
  );
};

export default Avatar;

// 이미지 스타일
const AvatarContainer = styled.img<{ $size: string }>`
  border-radius: 50%;
  margin-right: 0.75rem;
  background-color: #b3b3b3;
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  padding: 0px, 15px, 0px, 16px;
  border-radius: 100px;
  border: 1px solid #bcbcbc;

  &:not(:first-child) {
    margin-left: -1.85rem;
  }
`;
