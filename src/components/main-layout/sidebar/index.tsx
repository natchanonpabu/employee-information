"use client";

import AvatarCustom from "@/components/ui/avatar";
import Menus from "./menus";
import { Menu13 } from "@/assets/icons/menus";
import { ButtonCustom } from "@/components/ui";

const Sidebar = () => {
  return (
    <div className="w-14">
      <div className="w-14 h-screen fixed rounded-full bg-primary flex flex-col items-center justify-between py-3">
        <div className="flex flex-col items-center">
          <AvatarCustom />
          <Menus />
        </div>
        <ButtonCustom className="!bg-transparent !border-transparent !w-5 !h-5 !p-0">
          <Menu13 className="fill-none w-5 h-5 cursor-pointer !shadow-none" />
        </ButtonCustom>
      </div>
    </div>
  );
};

export default Sidebar;
