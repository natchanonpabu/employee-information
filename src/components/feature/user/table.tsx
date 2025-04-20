import { ButtonCustom, TableCustom } from "@/components/ui";
import { PlusOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import NodataImage from "@/assets/images/nodata.png";
import { cn } from "@/utils";
import { actionsDefault } from "@/components/ui/table/actions";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { Form } from "antd";
import { UserFormModal } from "./user-form";
import {
  deleteIdAction,
  deleteOpenAction,
  deleteUser,
  formOpenAction,
  getUser,
  patchUser,
  postUser,
} from "./user.slice";
import { User } from "./user.type";
import { ModalDelete } from "@/components/ui/modal-delete";

const TableUserAccount = () => {
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();
  const { users, user, formOpen, deleteOpen, deleteId } = useAppSelector(
    (state: RootState) => state.user
  );

  const columns: ColumnsType<User> = [
    {
      title: "รหัสพนักงาน",
      dataIndex: "employeeNo",
      key: "employeeNo",
      align: "center",
      width: 200,
    },
    {
      title: <div className="text-center">ชื่อพนักงาน</div>,
      dataIndex: "name",
      key: "name",
      width: 300,
    },
    {
      title: <div className="text-center">ที่อยู่</div>,
      dataIndex: "address",
      key: "address",
      render: (value) => value ?? "-",
    },
  ];

  const formOpenToggle = () => {
    if (formOpen) form.resetFields();
    dispatch(formOpenAction(!formOpen));
  };

  const deleteOpenToggle = () => {
    dispatch(deleteOpenAction(!deleteOpen));
  };

  const onEdit = (id: string) => {
    dispatch(getUser(id));
  };

  const onDelete = (id: string) => {
    dispatch(deleteIdAction(id));
    deleteOpenToggle();
  };

  const onConfirmDelete = () => {
    dispatch(deleteUser(deleteId ?? ""));
  };

  const onSubmit = async () => {
    const values = form.getFieldsValue();

    if (!user)
      return dispatch(postUser(values)).then((arg) =>
        arg.meta.requestStatus === "fulfilled" ? form.resetFields() : null
      );

    return dispatch(patchUser(values)).then((arg) =>
      arg.meta.requestStatus === "fulfilled" ? form.resetFields() : null
    );
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl flex flex-col gap-5 p-6",
        !users.length && "items-center"
      )}
    >
      <ModalDelete
        open={deleteOpen}
        onClose={deleteOpenToggle}
        onOk={onConfirmDelete}
      />
      <UserFormModal
        form={form}
        onClose={formOpenToggle}
        onOk={onSubmit}
        open={formOpen}
        data={user}
      />
      {!users.length ? (
        <div className="flex flex-col items-center py-[9.125rem]">
          <Image
            src={NodataImage}
            alt={""}
            className="w-[11.75rem] h-[8.75rem] mb-6"
          />
          <p className="text-2xl">โปรดระบุข้อมูลที่ต้องการค้นหา</p>
          <p className="text-lg">ไม่มีข้อมูลที่ต้องการแสดงในขณะนี้</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-2xl">ผลลัพธ์การค้นหา</span>
              <span className="base">{users.length} รายการ</span>
            </div>
            <ButtonCustom
              icon={<PlusOutlined />}
              className="w-60"
              onClick={formOpenToggle}
            >
              เพิ่มพนักงาน
            </ButtonCustom>
          </div>
          <TableCustom<User>
            columns={columns}
            dataSource={users}
            rowKey="id"
            action={actionsDefault({
              edit: { onClick: (record) => onEdit(record.id) },
              delete: { onClick: (record) => onDelete(record.id) },
            })}
          />
        </>
      )}
    </div>
  );
};

export default TableUserAccount;
