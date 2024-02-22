import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import { CgExport } from "react-icons/cg";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import useFetch from "@/hooks/useFetch";

const ConfirmOrders = () => {
  const { data: conOrder } = useFetch("/orders");

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
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "mobile",
        header: "Mobile",
        size: 150,
      },
      {
        accessorKey: "alternate_mobile",
        header: "Alternative Mobile",
        size: 150,
        Cell: (d) => {
          let altMob = d?.row?.original?.alternate_mobile;

          return <NavLink className="text-decoration-none text-dark mt-2 me-1">{altMob === "NULL" ? "NIL" : altMob}</NavLink>;
        },
      },
      {
        accessorKey: "email",
        header: "Email",
        Cell: (d) => {
          let email = d?.row?.original?.email;

          return <NavLink className="text-decoration-none text-dark mt-2 me-1">{email === "NULL" ? "NIL" : email}</NavLink>;
        },
      },

      {
        accessorKey: "advance_amount",
        header: "Advance Amount",
        size: 150,
      },
      {
        accessorKey: "balance_amount",
        header: "Balance Amount",
        size: 150,
      },
      {
        accessorKey: "total_amount",
        header: "Total Amount",
        size: 150,
      },
      {
        accessorKey: "advance_date",
        header: "Advance Date",
        size: 150,
      },
      {
        accessorKey: "delivery_date",
        header: "Delivery Date",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: conOrder?.appData ? conOrder?.appData : [],
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
