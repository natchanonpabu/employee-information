import { cn } from "@/utils";
import { Avatar, AvatarProps } from "antd";

const AvatarCustom = (props: AvatarProps) => {
  const { className, ...rest } = props;

  return (
    <Avatar
      {...rest}
      alt="avatar"
      className={cn("!w-[2.875rem] !h-[2.875rem] !bg-[#d9d9d9]", className)}
    />
  );
};

export default AvatarCustom;
