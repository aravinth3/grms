import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { CgExport } from "react-icons/cg";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const data = [
  {
    sn: "1",
    name: "Aravinth",
    mobile: "7339054025",
    advance: "1000",
    date: "02/02/2024",
  },
  {
    sn: "1",
    name: "Aravinth",
    mobile: "7339054025",
    advance: "1000",
    date: "02/02/2024",
  },
  {
    sn: "1",
    name: "Aravinth",
    mobile: "7339054025",
    advance: "1000",
    date: "02/02/2024",
  },
  {
    sn: "1",
    name: "Aravinth",
    mobile: "7339054025",
    advance: "1000",
    date: "02/02/2024",
  },
  {
    sn: "1",
    name: "Aravinth",
    mobile: "7339054025",
    advance: "1000",
    date: "02/02/2024",
  },
];

const AdvancePayment = () => {
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
        accessorKey: "mobile",
        header: "Mobile",
        size: 150,
      },
      {
        accessorKey: "advance",
        header: "Advance",
        size: 150,
      },
      {
        accessorKey: "date",
        header: "Date",
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
