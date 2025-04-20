import { cn } from "@/utils";
import { Modal, ModalProps } from "antd";
import { JSX } from "react";
import styled from "styled-components";
import { ButtonCustom } from "./button";
import XMark from "@/assets/icons/x-mark";
import Info from "@/assets/icons/info";

interface ModalCustomProps extends ModalProps {
  children: React.ReactNode;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  bgColorIcon?: string;
  closeIcon?: boolean;
  footer?: boolean;
  onClose?: () => void;
}

export const ModalCustom = ({
  children,
  icon: Icon,
  title,
  bgColorIcon,
  closeIcon = true,
  onClose,
  onOk,
  cancelText = "ยกเลิก",
  okText = "ตกลง",
  footer = true,
  loading = false,
  ...rest
}: ModalCustomProps) => {
  const bgColor = bgColorIcon || "bg-primary/20";

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <ModalStyle
      {...rest}
      footer={null}
      closeIcon={false}
      centered
      confirmLoading={loading}
    >
      <div>
        <div className="flex justify-between items-center">
          <div
            className={cn(
              "w-12 h-12 rounded-full flex justify-center items-center",
              bgColor
            )}
          >
            {Icon ? (
              <Icon className="w-5 h-5 fill-none" />
            ) : (
              <Info className="w-5 h-5 fill-text-base" />
            )}
          </div>
          {closeIcon && (
            <div
              className="text-xl text-gray-400 cursor-pointer"
              onClick={handleClose}
            >
              <XMark className="!w-6 !h-6" />
            </div>
          )}
        </div>
        <div className="text-2xl font-medium pt-5 pb-2">{title}</div>
        <div>{children}</div>
        {footer && (
          <div className="flex justify-center items-center gap-3 mt-5">
            {onClose && (
              <ButtonCustom
                onClick={onClose}
                variant="gray"
                className="w-60 h-[3.75rem]"
              >
                {cancelText}
              </ButtonCustom>
            )}
            {onOk && (
              <ButtonCustom
                onClick={onOk}
                className="w-60 h-[3.75rem]"
                loading={loading}
              >
                {okText}
              </ButtonCustom>
            )}
          </div>
        )}
      </div>
    </ModalStyle>
  );
};

const ModalStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 1rem;
    padding: 1.5rem;
  }
`;
