import { cn } from "@/utils";
import { Input } from "antd";
import { TextAreaProps } from "antd/es/input/TextArea";

const { TextArea } = Input;

export const TextAreaCustom = (props: TextAreaProps) => {
  const { className, ...rest } = props;
  return <TextArea className={cn("!border-base", className)} {...rest} />;
};
