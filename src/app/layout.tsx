import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { RecoilRootWrapper } from "./RecoilRootWrapper";
import StyledComponentsRegistry from "@/lib/StyledComponentRegistry";
import StyledComponentsAntdRegistry from "@/lib/AntdRegistry";
const pretendard = localFont({
  src: "../../public/PretendardVariable.woff2",
  display: "swap",
  // weight: "variable",
});

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
      <body className={pretendard.className}>
        <RecoilRootWrapper>
          <StyledComponentsRegistry>
            <StyledComponentsAntdRegistry>
              {children}
            </StyledComponentsAntdRegistry>
          </StyledComponentsRegistry>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
