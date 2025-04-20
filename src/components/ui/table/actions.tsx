import EditIcon from "@/assets/icons/edit";
import TrashIcon from "@/assets/icons/trash";
import { cn } from "@/utils";

export interface ActionsDefault<T> {
  actionNull?: boolean;
  edit?: {
    onClick?: (event: T) => void;
    children?: React.ReactNode;
    className?: string;
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
        edit?.className ?? "bg-waiting-bright hover:bg-waiting-bright/70",
    },
    {
      onClick: (event: T) => _delete?.onClick?.(event),
      children: _delete?.children ?? <TrashIcon className="w-6 h-6" />,
      className:
        _delete?.className ?? "bg-error-bright hover:bg-error-bright/70",
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
    <div
      className={cn(className, "cursor-pointer rounded-full text-center p-2")}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
