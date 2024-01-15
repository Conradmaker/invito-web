import Link from "next/link";
import React from "react";
import Button from "../Button";
import Dashboard from "./Dashboard";
import {HeaderSt} from "./styles";
function Header() {
  return (
    <HeaderSt>
      <Link href={"/"}>
        <img
          className="logo"
          src="https://static.invito.kr/assets/logos/logo-light.png"
          alt=""
        />
      </Link>
      <div className="right">
        <ul>
          <li>사용가이드</li>
          <li>템플릿</li>
          <li>
            <Link href={"/pricing"}>가격</Link>
          </li>
        </ul>
        <Link href={"/auth"}>
          <Button size="md">&nbsp;시작하기&nbsp;</Button>
        </Link>
      </div>
    </HeaderSt>
  );
}
Header.Dashboard = Dashboard;
export default Header;
