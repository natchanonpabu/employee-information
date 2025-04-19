import { Menu12, Menu6 } from "@/assets/icons/menus";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menus = () => {
  const pathname = usePathname();

  const menus = [
    {
      icon: <Menu6 className="fill-none" />,
      path: "/user",
    },
    {
      icon: <Menu12 className="fill-none" />,
      path: "/Menu12",
    },
  ];

  return menus.map((menu) => (
    <Link
      href={menu.path}
      key={menu.path}
      className={cn(
        "!w-14 !h-14 flex items-center justify-center !border-r-secondary hover:!border-r-4",
        pathname === menu.path && "!border-r-4"
      )}
    >
      {menu.icon}
    </Link>
  ));
};

export default Menus;
