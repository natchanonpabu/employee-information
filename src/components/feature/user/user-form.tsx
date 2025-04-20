"use client";

import { InputCustom, ModalCustom, TextAreaCustom } from "@/components/ui";
import { Col, Form, FormInstance, Row } from "antd";
import { useEffect } from "react";
import { User } from "./user.type";
import PageEdit from "@/assets/icons/page-edit";
import UserAdd from "@/assets/icons/user-add";
import { useAppSelector } from "@/store";

interface UserFormModalProps {
  form: FormInstance<User>;
  onClose: () => void;
  onOk: (values: User) => void;
  open: boolean;
  data?: User;
}

export const UserFormModal = ({
  data,
  form,
  onClose,
  onOk,
  open,
}: UserFormModalProps) => {
  const { loading } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (data && open && form) {
      form.setFieldsValue({
        ...data,
      });
    }
  }, [data, form, open]);

  const icon = data ? PageEdit : UserAdd;
  const title = data ? "แก้ไขข้อมูลพนักงาน" : "เพิ่มพนักงาน";

  return (
    <ModalCustom
      open={open}
      onClose={onClose}
      onOk={() => form.submit()}
      title={title}
      width={800}
      icon={icon}
      bgColorIcon="bg-primary-bright [&_svg]:w-8 [&_svg]:h-8"
      closeIcon={false}
      loading={loading}
    >
      <Form className="mt-4" form={form} layout="vertical" onFinish={onOk}>
        <Form.Item name="id" hidden>
          <InputCustom />
        </Form.Item>
        <Row gutter={16}>
          <Col lg={12} md={24}>
            <Form.Item
              name="employeeNo"
              label="รหัสพนักงาน"
              rules={[
                { required: true, message: "กรุณาระบุรหัสพนักงาน" },
                {
                  pattern: /^\d+$/,
                  message: "กรุณากรอกเฉพาะตัวเลข",
                },
              ]}
            >
              <InputCustom placeholder="ระบุรหัสพนักงาน" />
            </Form.Item>
          </Col>
          <Col lg={12} md={24}>
            <Form.Item
              name="name"
              label="ชื่อพนักงาน"
              rules={[{ required: true, message: "กรุณาระบุชื่อพนักงาน" }]}
            >
              <InputCustom placeholder="ระบุชื่อพนักงาน" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="address"
              label="ที่อยู่"
              rules={[{ message: "กรุณาระบุที่อยู่" }]}
            >
              <TextAreaCustom placeholder="โปรดระบุ" rows={4} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ModalCustom>
  );
};
