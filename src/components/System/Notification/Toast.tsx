/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from "react";
import {ToastSt} from "./styles";
import {useUiStore} from "@/modules/zustand/ui";
import Button from "../Button";
import {LuAlertCircle, LuCheckCircle} from "react-icons/lu";

function Toast() {
  const {toast, triggerToast} = useUiStore();
  const [open, setOpen] = React.useState(true);
  const timer = useRef(0);
  const onClose = () => {
    setOpen(false);
    window.setTimeout(() => {
      triggerToast(null);
    }, 500);
  };
  useEffect(() => {
    clearTimeout(timer.current);
    if (toast) {
      setOpen(true);
      timer.current = window.setTimeout(onClose, 5000);
    }
  }, [toast, timer.current]);
  if (!toast) return <></>;
  return (
    <ToastSt $open={open}>
      {toast.icon && (
        <div className="icon">
          {toast.icon === "success" && <LuCheckCircle />}
          {toast.icon === "alert" && <LuAlertCircle />}
        </div>
      )}
      <div className="content">
        <span className="title">{toast.title}</span>
        {toast?.description && <span className="desc">{toast?.description}</span>}
      </div>
      <div className="action">
        {toast.action ? (
          <Button loading={toast.action.loading} onClick={toast.action.onOk}>
            {toast.action.okText}
          </Button>
        ) : (
          <Button type="tertiary" onClick={onClose}>
            닫기
          </Button>
        )}
      </div>
    </ToastSt>
  );
}
export default Toast;
