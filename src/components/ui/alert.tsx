import CheckCircle from "@/assets/icons/check-circle";
import XMark from "@/assets/icons/x-mark";
import { cn } from "@/utils";
import { notification } from "antd";
import { JSX } from "react";
import { styled } from "styled-components";

export const NotificationBox = styled.div`
  .title {
    font-weight: 600;
    font-size: 24px;
    color: #1f2937;
  }

  .description {
    font-size: 16px;
    color: #6b7280;
  }
`;

interface NotificationProps {
  type: "success" | "error" | "warning" | "info";
}

interface NotificationStatus {
  title: string;
  desc: string;
  icon: JSX.Element;
  className: string;
}

const Alert = ({ type }: NotificationProps) => {
  const getStatus = (): NotificationStatus => {
    switch (type) {
      case "success":
        return {
          title: "สำเร็จ",
          desc: "ทำรายการเสร็จสิ้น",
          icon: <CheckCircle className="w-10 h-10" />,
          className: "!border-success !bg-success-bright",
        };
      case "error":
        return {
          title: "เกิดข้อผิดพลาด",
          desc: "กรุณาลองใหม่อีกครั้ง",
          icon: <></>,
          className: "!border-error !bg-error-bright",
        };
      case "warning":
        return {
          title: "คำเตือน",
          desc: "กรุณาตรวจสอบข้อมูลอีกครั้ง",
          icon: <></>,
          className: "!border-secondary !bg-warning-bright",
        };
      case "info":
        return {
          title: "ข้อมูล",
          desc: "กรุณาตรวจสอบข้อมูลอีกครั้ง",
          icon: <></>,
          className: "!border-text-base !bg-base",
        };
    }
  };

  const { title, desc, className, icon } = getStatus();

  notification.open({
    message: null,
    description: (
      <NotificationBox>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            {icon}
            <div
              className="cursor-pointer"
              onClick={() => {
                notification.destroy();
              }}
            >
              <XMark className="!w-5 !h-5" />
            </div>
          </div>
          <div>
            <div className="title">{title}</div>
            <div className="description">{desc}</div>
          </div>
        </div>
      </NotificationBox>
    ),
    duration: 3,
    placement: "topRight",
    closeIcon: null,
    className: cn("!p-5 !rounded-lg border-2", className),
  });
};

export { Alert };
