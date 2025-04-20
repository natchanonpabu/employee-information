import { cn } from "@/utils";
import { Table, TableColumnsType, TableProps } from "antd";

interface TableCustomProps<T> extends Omit<TableProps<T>, "dataSource"> {
  dataSource: T[];
  action?: ActionProps<T>[];
}

interface ActionProps<T> {
  onClick: (rc: T) => void;
  children: React.ReactNode;
  className?: string;
}

export const TableCustom = <T extends object>(props: TableCustomProps<T>) => {
  const { className, columns, action, ...rest } = props;

  const generateColumns = (): TableColumnsType<T> => {
    if (!columns) return [];
    if (action) {
      return [
        ...columns,
        {
          title: "จัดการ",
          key: "action",
          width: 100,
          render: (_, record) => (
            <div className="flex gap-2 justify-center">
              {action.map((item, index) => {
                const { onClick, children, className } = item;
                return (
                  <ActionBox
                    key={index}
                    onClick={() => {
                      onClick(record);
                    }}
                    className={className}
                  >
                    {children}
                  </ActionBox>
                );
              })}
            </div>
          ),
        },
      ];
    }
    return columns;
  };

  const _columns = generateColumns();

  return (
    <Table<T>
      className={cn(
        className,
        "[&_.ant-table]:!bg-transparent",
        "[&_table>thead>tr:first-child>th:first-child]:!rounded-tl-3xl [&_table>thead>tr:first-child>th:last-child]:!rounded-tr-3xl",
        "[&_.ant-table-thead>tr>th]:!bg-primary [&_.ant-table-thead>tr>th]:!text-white  [&_.ant-table-thead>tr>th]:!text-base [&_.ant-table-thead>tr>th]:!border-b-0",
        "[&_.ant-table-thead>tr>th::before]:!bg-primary",
        "[&_.ant-table-tbody>tr>td:first-child]:border-l [&_.ant-table-tbody>tr>td:first-child]:border-l-gray-300 [&_.ant-table-tbody>tr>td:last-child]:border-r [&_.ant-table-tbody>tr>td:last-child]:border-r-gray-300",
        "[&_.ant-table-tbody>tr:last-child>td:first-child]:rounded-bl-3xl [&_.ant-table-tbody>tr:last-child>td:last-child]:rounded-br-3xl",
        "[&_.ant-table-tbody>.ant-table-placeholder>td]:!border-b [&_.ant-table-tbody>.ant-table-placeholder>td]:!border-b-gray-300 [&_.ant-table-tbody>.ant-table-placeholder>td]:!rounded-b-3xl",
        "[&_.ant-table-tbody>tr:last-child>td]:!border-b [&_.ant-table-tbody>tr:last-child>td]:!border-b-gray-300 [&_.ant-table-tbody>tr>td]:!border-b-0",
        "[&_.ant-table-tbody>tr>.ant-table-cell-row-hover]:!bg-transparent"
      )}
      pagination={false}
      columns={_columns}
      rowClassName={(_, index) => {
        return index % 2 === 0 ? "bg-white" : "bg-gray-200";
      }}
      {...rest}
    />
  );
};

interface ActionBoxProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const ActionBox = (props: ActionBoxProps) => {
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
