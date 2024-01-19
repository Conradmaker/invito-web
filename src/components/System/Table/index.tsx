import React, {useMemo} from "react";

import RCTable, {TableProps as RTP} from "rc-table";
import {ReactTableSt} from "./styles";
import Button from "../Button";
import Input from "../Input";
import Avatar from "../Icon/Avatar";
import Typo from "../Typo";
import Pill from "../Pill";

const defaultColumns = [
  {
    title: "멤버",
    dataIndex: "a",
    key: "a",
    render() {
      return (
        <div className="flex items-center gap-3">
          <Avatar name="asd" size={36} />
          <div className="flex-col flex">
            <Typo.Body>유원근</Typo.Body>
            <Typo.Desc color="secondary">yhg0337@gmail.com</Typo.Desc>
          </div>
        </div>
      );
    },
  },
  {
    id: "123",
    title: "상태",
    dataIndex: "b",
    key: "b",
    width: 100,
    render() {
      return (
        <div className="flex justify-center">
          <Pill label="초대중" />
        </div>
      );
    },
  },
  {
    title: "권한",
    dataIndex: "c",
    key: "c",
    render() {
      return (
        <Input.Select
          data={[
            {label: "관리자", value: "a"},
            {label: "멤버", value: "ㅠ"},
          ]}
          value="a"
          size="sm"
        />
      );
    },
    width: 100,
  },
  {
    title: " ",
    dataIndex: "a",
    key: "d",
    render() {
      return (
        <Button size="sm" type="tertiary">
          제거
        </Button>
      );
    },
    width: 100,
  },
];

const defaultData = [
  {a: "123", key: "1"},
  {a: "cdd", b: "초대중", key: "2"},
  {a: "1333", c: "eee", d: 2, key: "3"},
];

const components: RTP["components"] = {
  table: ReactTableSt,
};

type TableProps = {
  data: {[key in string]: any}[];
  columns: {
    title?: string;
    dataIndex?: string;
    key: string;
    render?: (a: any, b: any) => React.ReactNode;
    width?: number;
  }[];
};

export default function Table({
  data = defaultData,
  columns = defaultColumns,
}: TableProps) {
  const col = useMemo(() => {
    return columns.map((v, idx) => {
      if (!v.key) v["key"] = idx + "";
      if (!v.dataIndex) v["dataIndex"] = v.key;
      if (!v.title) v["title"] = v.key;
      return v;
    });
  }, [columns]);
  return (
    <RCTable
      columns={col}
      data={data}
      components={components}
      rowKey={(v, v2) => v + "-" + v2?.toString()}
    />
  );
}
