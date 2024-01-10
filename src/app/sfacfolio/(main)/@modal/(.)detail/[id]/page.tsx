import { Modal } from "@/components/Modal/Modal";
import React from "react";
import { Detail } from "@/app/sfacfolio/components/DetailPage/Detail";
import { DetailSideBar } from "@/app/sfacfolio/components/DetailPage/DetailSideBar";

const page = () => {
  return (
    <Modal>
      <Detail isModal={true} />
      {/* <DetailSideBar sidebarTxtColor="black" /> */}
    </Modal>
  );
};

export default page;
