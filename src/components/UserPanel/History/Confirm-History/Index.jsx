import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import { CgExport } from "react-icons/cg";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { IoIosArrowForward } from "react-icons/io";
import "./Style.css";

const data = [
  {
    sn: "1",
    order_id: "123",
    order_date: "02/02/2024",
    delivery_date: "25/02/2024",
    last_advance: "500",
    total_amount: "1500",
    advance: "1000",
    balance: "500",
    full_payment: "2000",
  },
  {
    sn: "1",
    order_id: "123",
    order_date: "02/02/2024",
    delivery_date: "25/02/2024",
    last_advance: "500",
    total_amount: "1500",
    advance: "1000",
    balance: "500",
    full_payment: "2000",
  },
  {
    sn: "1",
    order_id: "123",
    order_date: "02/02/2024",
    delivery_date: "25/02/2024",
    last_advance: "500",
    total_amount: "1500",
    advance: "1000",
    balance: "500",
    full_payment: "2000",
  },
];

const ConfirmHistory = () => {
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
        accessorKey: "order_id",
        header: "Order Id",
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
        accessorKey: "full_payment",
        header: "Full Payment",
        size: 150,
      },
      {
        accessorKey: "BRANCH_CODE",
        header: "Action",
        Cell: () => {
          return (
            <div className="dual-icon">
              <NavLink className="action_icon">
                <MdRemoveRedEye />
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
      <h5 className="history-clientname ms-3 mb-4">
        Welcome <strong>Aravinth</strong>
      </h5>

      <span className="history-links ms-3">
        <NavLink to="/dashboard/user/confirm-history">Confirm Orders</NavLink> <IoIosArrowForward /> <NavLink to="/dashboard/user/order-items">Order Item</NavLink>
      </span>
      <div className="customer-profile container-fluid mt-4">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default ConfirmHistory;
