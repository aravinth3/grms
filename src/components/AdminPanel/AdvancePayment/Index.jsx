import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import { CgExport } from "react-icons/cg";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import useFetch from "@/hooks/useFetch";

const AdvancePayment = () => {
  const { data: advance } = useFetch(`/advances`);
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
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
        Cell: (d) => {
          let email = d?.row?.original?.email;

          return <NavLink className="text-decoration-none text-dark mt-2 me-1">{email === "NULL" ? "NIL" : email}</NavLink>;
        },
      },
      {
        accessorKey: "advance_amount",
        header: "Amount",
      },
      // {
      //   accessorKey: "updated_at",
      //   header: "Last Updated",
      //   Cell: (d) => {
      //     return <NavLink className="text-decoration-none text-dark">{d?.row?.original?.updated_at?.split(" ")[0]}</NavLink>;
      //   },
      // },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: advance?.appData ? advance?.appData : [],
    initialState: { density: "compact" },
    enableDensityToggle: false,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    renderTopToolbarCustomActions: () => (
      <h6 className="table_heading">
        <strong>Advance Payment</strong>
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

export default AdvancePayment;
