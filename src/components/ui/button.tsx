import { cn } from "@/utils";
import { Button, ButtonProps } from "antd";

interface ButtonCustomProps extends Omit<ButtonProps, "variant"> {
  variant?: "primary" | "gray";
}

const variant = {
  primary: "!bg-primary !border-primary !text-white",
  gray: "!bg-base !border-base !text-text-base",
};

export const ButtonCustom = (props: ButtonCustomProps) => {
  const { className, variant: _variant = "primary", ...rest } = props;
  return (
    <Button
      {...rest}
      variant={undefined}
      className={cn(
        "!h-14 !rounded-full !text-lg font-medium",
        variant[_variant],
        className
      )}
    />
  );
};
