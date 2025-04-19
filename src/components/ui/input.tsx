import { cn } from "@/utils";
import { Input, InputProps } from "antd";

export const InputCustom = (props: InputProps) => {
  const { className, ...rest } = props;
  return (
    <Input className={cn("!h-12 !border-text-base", className)} {...rest} />
  );
};
