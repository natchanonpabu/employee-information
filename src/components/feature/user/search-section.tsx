import SearchSection from "@/components/search-section";
import { DatePickerCustom, InputCustom } from "@/components/ui";
import { useAppDispatch, useAppSelector } from "@/store";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import { getUsers } from "@/components/feature/user/user.slice";

interface SearchSectionUserParams {
  employeeNo?: string;
  name?: string;
  registerDate?: string;
}

const SearchSectionUser = () => {
  const [form] = useForm();

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.user);

  const inputs = [
    {
      input: <InputCustom placeholder="เลือกรหัสพนักงาน" />,
      label: "รหัสพนักงาน",
      name: "employeeNo",
    },
    {
      input: <InputCustom placeholder="ระบุพนักงาน" />,
      label: "ชื่อพนักงาน",
      name: "name",
    },
    {
      input: <DatePickerCustom placeholder="เลือกวันที่" />,
      label: "วันที่สมัคร",
      name: "registerDate",
    },
  ];

  const onFinish = async (values: SearchSectionUserParams) => {
    const registerDate = dayjs(values.registerDate).format("DD/MM/YYYY");

    const params = {} as SearchSectionUserParams;
    if (values.employeeNo) params["employeeNo"] = values.employeeNo;
    if (values.name) params["name"] = values.name;
    if (values.registerDate) params["registerDate"] = registerDate;

    dispatch(getUsers(params));
  };

  return (
    <SearchSection
      inputs={inputs}
      form={form}
      onFinish={(values) => onFinish(values as SearchSectionUserParams)}
      loading={loading}
    />
  );
};

export default SearchSectionUser;
