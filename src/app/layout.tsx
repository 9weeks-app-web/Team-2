import type { Metadata } from "next";
import "../styles/globals.css";
import { RecoilRootWrapper } from "./RecoilRootWrapper";

import RootContainer from "@/components/RootContainer";
import ClientComponentContainer from "./ClientComponentContainer";
import { NavTabs } from "@/components/Nav/NavTabs";
import { Navigation } from "@/components/Nav/Navigation";
// const pretendard = localFont({
//   src: "../../public/PretendardVariable.woff2",
//   display: "swap",
// });

// 메타데이터
export const metadata: Metadata = {
  title: "스펙폴리오",
  description: "2팀 스펙폴리오 개발",
};

export default function RootLayout({
  children,
  popularPortfoilo,
}: {
  children: React.ReactNode;
  popularPortfoilo: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRootWrapper>
          <ClientComponentContainer>
            <RootContainer>
              <NavTabs />
              <Navigation />
              {children}
            </RootContainer>
          </ClientComponentContainer>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
