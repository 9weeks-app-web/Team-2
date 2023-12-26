import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { RecoilRootWrapper } from "./RecoilRootWrapper";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
