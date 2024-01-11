"use client";
import { userInfoState } from "@/state/atom/atom";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
import styled from "styled-components";
import { _user1, _user } from "../../constant/_[project]mockup";
import SectionSpecCard from "./components/Section/SectionSpecCard";
import SectionProfile from "./components/Section/SectionProfile";
import SectionFeedBack from "./components/Section/SectionFeedBack";
import { useSession } from "next-auth/react";
import TabBody from "./components/Section/TabLayout/TabBody";

const Page = () => {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    const getUserInfo = () => {
      if (session?.user?.name === _user1.name) {
        setUserInfo(_user1);
      } else if (session?.user?.name === _user.name) {
        setUserInfo(_user);
      } else {
        setUserInfo(_user1);
      }
    };

    getUserInfo();
  }, [session?.user?.name, setUserInfo]);

  return (
    <Container>
      <SectionSpecCard />
      <Section>
        <Inner>
          <SectionProfile />
          <SectionFeedBack />
        </Inner>
        <TabBody />
      </Section>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  margin: auto;
  gap: 20px;
  width: fit-content;
`;

const Inner = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 790px;
`;
