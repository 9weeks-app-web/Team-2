import type { Metadata } from "next";
import "../styles/globals.css";
import { RecoilRootWrapper } from "./RecoilRootWrapper";
import ClientComponentContainer from "./ClientComponentContainer";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRootWrapper>
          <ClientComponentContainer>{children}</ClientComponentContainer>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
