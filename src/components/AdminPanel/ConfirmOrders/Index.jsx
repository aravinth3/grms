import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { CgExport } from "react-icons/cg";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const data = [
  {
    sn: "1",
    name: "Aravinth",
    order_id: "123",
    mobile: "7339054025",
    order_date: "02/01/2024",
    delivery_date: "15/02/2024",
    last_advance: "12/05/2024",
    total_amount: "1500",
    advance: "1000",
    balance: "500",
    full_amount: "1500",
  },
  {
    sn: "1",
    name: "Aravinth",
    order_id: "123",
    mobile: "7339054025",
    order_date: "02/01/2024",
    delivery_date: "15/02/2024",
    last_advance: "12/05/2024",
    total_amount: "1500",
    advance: "1000",
    balance: "500",
    full_amount: "1500",
  },
  {
    sn: "1",
    name: "Aravinth",
    order_id: "123",
    mobile: "7339054025",
    order_date: "02/01/2024",
    delivery_date: "15/02/2024",
    last_advance: "12/05/2024",
    total_amount: "1500",
    advance: "1000",
    balance: "500",
    full_amount: "1500",
  },
  {
    sn: "1",
    name: "Aravinth",
    order_id: "123",
    mobile: "7339054025",
    order_date: "02/01/2024",
    delivery_date: "15/02/2024",
    last_advance: "12/05/2024",
    total_amount: "1500",
    advance: "1000",
    balance: "500",
    full_amount: "1500",
  },
];

const ConfirmOrders = () => {
  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("mrt-pdf-example.pdf");
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "sn", //access nested data with dot notation
        header: "Sn.No",
        size: 150,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "order_id", //normal accessorKey
        header: "Order Id",
        size: 200,
      },
      {
        accessorKey: "mobile",
        header: "Mobile",
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
        accessorKey: "total_amount",
        header: "Total Amount",
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
        accessorKey: "full_amount",
        header: "Full Amount",
        size: 150,
      },
      {
        accessorKey: "BRANCH_CODE",
        header: "Action",
        Cell: () => {
          return (
            <div className="dual-icon">
              <NavLink className="action_danger">
                <MdDelete />
                <span>Delete</span>
              </NavLink>

              <NavLink className="action_icon">
                <FaEye />
                <span>View</span>
              </NavLink>
            </div>
          );
        },
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
        <strong>Confirm Orders</strong>
        <CgExport className="export-icon ms-3" style={{ fontSize: "19px", cursor: "pointer" }} onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)} />
      </h6>
    ),
  });
  return (
    <div>
      <div className="customer-profile container-fluid mt-3">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default ConfirmOrders;
