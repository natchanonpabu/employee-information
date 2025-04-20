import Info from "@/assets/icons/info";
import { ModalCustom } from "./modal";

interface ModalDeleteProps {
  open: boolean;
  onClose: () => void;
  onOk: () => void;
}

export const ModalDelete = ({ onClose, onOk, open }: ModalDeleteProps) => {
  return (
    <ModalCustom
      open={open}
      onClose={onClose}
      onOk={onOk}
      title="ยืนยันการลบรายการ"
      width={500}
      okText="ตกลง"
      bgColorIcon="bg-error-bright [&_svg]:w-8 [&_svg]:h-8 [&_svg]:relative [&_svg]:left-0.5 [&_svg]:top-0.5"
      icon={Info}
    >
      <div className="text-text-base">กรุณายืนยันการทำรายการอีกครั้ง</div>
    </ModalCustom>
  );
};
