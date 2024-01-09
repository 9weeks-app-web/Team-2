"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
const ModalContainer = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 5;
  height: 700px;
`;

const Position = styled.div`
  position: relative;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

export const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose?: () => void;
}) => {
  const [isMount, setIsMount] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const backDropRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  useEffect(() => {
    ref.current = document.getElementById("modal") as HTMLElement;
    backDropRef.current = document.getElementById("backdrop") as HTMLElement;
    setIsMount(() => true);

    return () => {
      setIsMount(() => false);
    };
  }, []);

  return (
    <>
      {ref.current &&
        isMount &&
        createPortal(
          <ModalContainer>
            <Position>{children}</Position>
          </ModalContainer>,
          ref.current
        )}
      {backDropRef.current &&
        isMount &&
        createPortal(
          <BackDrop onClick={() => router.back()} />,
          backDropRef.current
        )}
    </>
  );
};
