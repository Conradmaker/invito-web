import Link from "next/link";
import React from "react";
import {TabSt} from "./styles";

type TabProps = {
  data: {href?: string; onClick?: () => void; label: string; isActive?: boolean}[];
  py?: number;
};
export default function Tab({data, py = 0}: TabProps) {
  return (
    <TabSt $py={py}>
      {data.map((item, idx) =>
        item.href ? (
          <li key={idx} className={item.isActive ? "active" : ""}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ) : (
          <li onClick={item.onClick} key={idx} className={item.isActive ? "active" : ""}>
            <span>{item.label}</span>
          </li>
        )
      )}
    </TabSt>
  );
}
