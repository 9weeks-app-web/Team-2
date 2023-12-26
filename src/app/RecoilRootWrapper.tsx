"use client";
import React, { Children } from "react";
import { RecoilRoot } from "recoil";

export const RecoilRootWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
