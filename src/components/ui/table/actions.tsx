import EditIcon from "@/assets/icons/edit";
import TrashIcon from "@/assets/icons/trash";
import { cn } from "@/utils";
import { ButtonCustom } from "../button";

export interface ActionsDefault<T> {
  actionNull?: boolean;
  edit?: {
    onClick?: (event: T) => void;
    children?: React.ReactNode;
    className?: string;
    loading?: (id: string) => boolean;
  };
  delete?: {
    onClick?: (event: T) => void;
    children?: React.ReactNode;
    className?: string;
  };
}

export const actionsDefault = <T extends object>(props?: ActionsDefault<T>) => {
  const { actionNull = false, edit, delete: _delete } = props ?? {};

  if (actionNull) return [];

  return [
    {
      onClick: (event: T) => edit?.onClick?.(event),
      children: edit?.children ?? <EditIcon className="w-6 h-6" />,
      className:
        edit?.className ??
        "!bg-waiting-bright hover:!bg-waiting-bright/70 !text-text-base",
      loading: edit?.loading,
    },
    {
      onClick: (event: T) => _delete?.onClick?.(event),
      children: _delete?.children ?? <TrashIcon className="w-6 h-6" />,
      className:
        _delete?.className ?? "!bg-error-bright hover:!bg-error-bright/70",
    },
  ];
};

export interface ActionProps<T> {
  onClick: (rc: T) => void;
  children: React.ReactNode;
  className?: string;
}

interface ActionBoxProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ActionBox = (props: ActionBoxProps) => {
  const { onClick, children, className } = props;

  return (
    <ButtonCustom
      className={cn(
        "cursor-pointer rounded-full text-center !border-transparent hover:!border-transparent !p-0 !h-9 !w-9",
        className
      )}
      onClick={onClick}
    >
      {children}
    </ButtonCustom>
  );
};
