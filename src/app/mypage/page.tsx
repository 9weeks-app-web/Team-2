"use client";

import { userInfoState } from "@/state/atom/atom";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
import styled from "styled-components";
import { _user1, _user } from "../../constant/_[project]mockup";
import SectionSpecCard from "./Section/SectionSpecCard";
import SectionProfile from "./Section/SectionProfile";
import SectionFeedBack from "./Section/SectionFeedBack";
import { useSession } from "next-auth/react";
import SectionTab from "./Section/SectionTab";
export const ProjectPage = () => {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  // 로그인한 사용자 정보를 userInfoState로 설정하는 함수
  const getUserInfo = () => {
    if (session?.user?.name === _user1.name) {
      setUserInfo(_user1); // _user1과 일치하는 경우 userInfoState 업데이트
    } else if (session?.user?.name === _user.name) {
      setUserInfo(_user); // _user와 일치하는 경우 userInfoState 업데이트
    } else {
      setUserInfo(_user1); // 기본값으로 _user1을 설정
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <Container>
      <SectionSpecCard />
      <Section>
        <Inner>
          <SectionProfile />
          <SectionFeedBack />
        </Inner>
        <SectionTab></SectionTab>
      </Section>
    </Container>
  );
};

export default ProjectPage;

const Container = styled.div`
  display: flex;
  margin: 36px 190px;
  gap: 20px;
`;

const Inner = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
