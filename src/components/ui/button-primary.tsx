import { cn } from "@/utils";
import { Button, ButtonProps } from "antd";

export const ButtonPrimary = (props: ButtonProps) => {
  const { className, ...rest } = props;
  return (
    <Button
      {...rest}
      className={cn(
        "!h-14 !rounded-full !text-lg font-medium !bg-primary !border-primary !text-white",
        className
      )}
    />
  );
};
