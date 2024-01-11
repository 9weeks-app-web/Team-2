import { Detail } from "@/app/sfacfolio/components/DetailPage/Detail";

const page = () => {
  // const { id } = params; { params }: { params: { id: string } }
  return (
    <>
      <Detail isModal={false} />
    </>
  );
};

export default page;

// export async function generateStaticParams() {
//   return [{ id: "a1b1" }];
// }
