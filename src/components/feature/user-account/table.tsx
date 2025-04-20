import { ButtonCustom, TableCustom } from "@/components/ui";
import { PlusOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import NodataImage from "@/assets/images/nodata.png";
import { cn } from "@/utils";
import { actionsDefault } from "@/components/ui/table/actions";

interface UserAccountTable {
  employeeNo: string;
  employeeName: string;
  address: string;
}

const TableUserAccount = () => {
  const data = [
    {
      id: 1,
      employeeNo: "12345",
      employeeName: "Natchanon Panbut",
      address: "Bangkok",
    },
    {
      id: 2,
      employeeNo: "12346",
      employeeName: "Natchanon Panbut",
      address: "Bangkok",
    },
  ];

  const columns: ColumnsType<UserAccountTable> = [
    {
      title: "รหัสพนักงาน",
      dataIndex: "employeeNo",
      key: "employeeNo",
      align: "center",
      width: 200,
    },
    {
      title: <div className="text-center">ชื่อพนักงาน</div>,
      dataIndex: "employeeName",
      key: "employeeName",
      width: 300,
    },
    {
      title: <div className="text-center">ที่อยู่</div>,
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div
      className={cn(
        "bg-white rounded-2xl flex flex-col gap-5 p-6",
        !data.length && "items-center"
      )}
    >
      {!data.length ? (
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
              <span className="text-base">4 รายการ</span>
            </div>
            <ButtonCustom icon={<PlusOutlined />} className="w-60">
              เพิ่มพนักงาน
            </ButtonCustom>
          </div>
          <TableCustom<UserAccountTable>
            columns={columns}
            dataSource={data}
            rowKey="id"
            action={actionsDefault()}
          />
        </>
      )}
    </div>
  );
};

export default TableUserAccount;
