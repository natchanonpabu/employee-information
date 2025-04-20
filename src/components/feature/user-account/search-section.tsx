import SearchSection from "@/components/search-section";
import { DatePickerCustom, InputCustom } from "@/components/ui";
import { useForm } from "antd/es/form/Form";

const SearchSectionUserAccount = () => {
  const [form] = useForm();

  const inputs = [
    {
      input: <InputCustom placeholder="เลือกรหัสพนักงาน" />,
      label: "รหัสพนักงาน",
      name: "employeeNo",
    },
    {
      input: <InputCustom placeholder="ระบุพนักงาน" />,
      label: "ชื่อพนักงาน",
      name: "employeeName",
    },
    {
      input: <DatePickerCustom placeholder="เลือกวันที่" />,
      label: "วันที่สมัคร",
      name: "registerDate",
    },
  ];

  const onFinish = (values: unknown) => {
    console.log("Success:", values);
  };

  return <SearchSection inputs={inputs} form={form} onFinish={onFinish} />;
};

export default SearchSectionUserAccount;
