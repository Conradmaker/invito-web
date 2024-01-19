"use client";
import Link from "next/link";
import React from "react";
import {SideTabSt} from "./styles";

type SideTabProps = {
  data: {
    label: string;
    isActive?: boolean;
    href: string;
  }[];
};
export default function SideTab({data}: SideTabProps) {
  return (
    <SideTabSt>
      {data.map((item) => (
        <li key={item.label} className={item.isActive ? "active" : ""}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </SideTabSt>
  );
}
