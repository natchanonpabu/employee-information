import { ButtonCustom } from "@/components/ui";
import { Col, Form, FormInstance, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface Inputs {
  input: React.ReactNode;
  label: string;
  name: string;
}

interface SearchSectionProps {
  inputs: Inputs[];
  form: FormInstance<unknown>;
  onFinish: (values: unknown) => void;
  loading: boolean;
}

const SearchSection = (props: SearchSectionProps) => {
  const { inputs = [], form, onFinish, loading = false } = props;

  return (
    <div className="bg-white flex px-6 pt-6 pb-4 rounded-2xl">
      <div className="pt-2 pb-8">
        <div className="h-full border-2 border-primary rounded-full" />
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="w-full"
      >
        <Row gutter={24} className="pl-3 !mx-0" justify="end">
          {inputs.map((input) => (
            <Col sm={12} md={8} lg={6} key={input.name}>
              <Form.Item label={input.label} name={input.name}>
                {input.input}
              </Form.Item>
            </Col>
          ))}
          <Col sm={12} md={8} lg={6}>
            <Form.Item label=" " className="flex justify-end">
              <ButtonCustom
                htmlType="submit"
                className="w-[12.5rem] relative -top-1"
                icon={<SearchOutlined className="text-2xl" />}
                loading={loading}
                disabled={loading}
              >
                ค้นหา
              </ButtonCustom>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchSection;
