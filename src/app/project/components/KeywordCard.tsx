import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";
import KeywordTag from "./KeywordTag";
import { evaluationKeywordTagState } from "@/state/atom/atom";
import { useRecoilState } from "recoil";

interface KeywordCardProps {
  title: string;
  keywords: string[];
}

const KeywordCard: React.FC<KeywordCardProps> = ({ title, keywords }) => {
  const [selectedKeywords, setSelectedKeywords] = useRecoilState(
    evaluationKeywordTagState
  );

  const handleKeywordClick = (keyword: string) => {
    const keywords = selectedKeywords[title] || [];

    if (keywords.includes(keyword)) {
      setSelectedKeywords({
        ...selectedKeywords,
        [title]: keywords.filter((item) => item !== keyword),
      });
    } else {
      if (keywords.length < 3) {
        setSelectedKeywords({
          ...selectedKeywords,
          [title]: [...keywords, keyword],
        });
      } else {
        alert("각 항목별로 최대 3개까지만 선택할 수 있습니다.");
      }
    }
    console.log(selectedKeywords);
  };
  return (
    <KeywordCardWrap>
      <Title>
        <B2_M_14>{title}</B2_M_14>
      </Title>
      <Content>
        {keywords.map((keyword, index) => (
          <KeywordTag
            key={keyword + index}
            title={keyword}
            onClick={() => handleKeywordClick(keyword)}
            isLimitReached={(selectedKeywords[title] || []).length >= 3}
          />
        ))}
      </Content>
    </KeywordCardWrap>
  );
};

export default KeywordCard;

const KeywordCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

const Title = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  flex-wrap: wrap;
`;
