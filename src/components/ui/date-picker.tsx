import { cn } from "@/utils";
import { DatePicker, DatePickerProps } from "antd";

export const DatePickerCustom = (props: DatePickerProps) => {
  const { className, ...rest } = props;

  return (
    <DatePicker
      className={cn("w-full !h-12 !border-base", className)}
      {...rest}
    />
  );
};
