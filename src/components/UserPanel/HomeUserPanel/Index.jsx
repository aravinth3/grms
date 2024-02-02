import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import "./Style.css";

const data = [
  {
    id: "1",
    order_date: "02/02/2024",
    delivery_date: "15/02/2024",
    last_advance: "500",
    total: "2000",
    advance: "500",
    balance: "1500",
    pay: "1500",
  },
  {
    id: "1",
    order_date: "02/02/2024",
    delivery_date: "15/02/2024",
    last_advance: "500",
    total: "2000",
    advance: "500",
    balance: "1500",
    pay: "1500",
  },
  {
    id: "1",
    order_date: "02/02/2024",
    delivery_date: "15/02/2024",
    last_advance: "500",
    total: "2000",
    advance: "500",
    balance: "1500",
    pay: "1500",
  },
];

const pay_data = [
  {
    date: "02/02/2024",
    advance: "500",
    pay_advance: "1500",
  },
  {
    date: "02/02/2024",
    advance: "500",
    pay_advance: "1500",
  },
  {
    date: "02/02/2024",
    advance: "500",
    pay_advance: "1500",
  },
];

const HomeUserPanel = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 150,
      },
      {
        accessorKey: "order_date",
        header: "Order Date",
        size: 150,
      },
      {
        accessorKey: "delivery_date",
        header: "Delivery Date",
        size: 150,
      },
      {
        accessorKey: "last_advance",
        header: "Last Advance",
        size: 150,
      },
      {
        accessorKey: "total",
        header: "Total",
        size: 150,
      },
      {
        accessorKey: "advance",
        header: "Advance",
        size: 150,
      },
      {
        accessorKey: "balance",
        header: "Balance",
        size: 150,
      },
      {
        accessorKey: "pay",
        header: "Pay",
        size: 150,
      },
    ],
    []
  );

  const pay_columns = useMemo(
    () => [
      {
        accessorKey: "date",
        header: "Date",
        size: 150,
      },
      {
        accessorKey: "advance",
        header: "Advance",
        size: 150,
      },
      {
        accessorKey: "pay_advance",
        header: "Pay Advance",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: { density: "compact" },
    enableDensityToggle: false,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    renderTopToolbarCustomActions: () => (
      <h6 className="table_heading">
        <strong>Balance</strong>
      </h6>
    ),
  });

  const pay_table = useMaterialReactTable({
    columns: pay_columns,
    data: pay_data,
    initialState: { density: "compact" },
    enableDensityToggle: false,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    renderTopToolbarCustomActions: () => (
      <h6 className="table_heading">
        <strong>Advance</strong>
      </h6>
    ),
  });
  return (
    <div>
      <h5 className="client-name">
        Welcome <strong>Aravinth</strong>
      </h5>
      <div className="customer-profile container-fluid mt-3">
        <MaterialReactTable table={table} />
        <div className="mt-5">
          <MaterialReactTable table={pay_table} />
        </div>
      </div>
    </div>
  );
};

export default HomeUserPanel;
