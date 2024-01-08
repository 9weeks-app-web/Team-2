import { Container } from "../components/Container";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container title="로그인">{children}</Container>;
}
