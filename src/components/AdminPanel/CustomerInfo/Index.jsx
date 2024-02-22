import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { CgExport } from "react-icons/cg";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import useFetch from "@/hooks/useFetch";

const CustomerInfo = () => {
  const { data: customer } = useFetch("/customers");

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
        size: 150,
        Cell: (d) => {
          let email = d?.row?.original?.email;

          return <NavLink className="text-decoration-none text-dark mt-2 me-1">{email === "NULL" ? "NIL" : email}</NavLink>;
        },
      },
      // {
      //   accessorKey: "date_of_register",
      //   header: "Date of Registeration",
      //   size: 150,
      // },

      // {
      //   accessorKey: "BRANCH_CODE",
      //   header: "Action",
      //   Cell: () => {
      //     return (
      //       <div className="dual-icon">
      //         <NavLink className="action_danger">
      //           <MdDelete />
      //           <span>Delete</span>
      //         </NavLink>
      //       </div>
      //     );
      //   },
      // },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: customer?.appData ? customer?.appData : [],
    initialState: { density: "compact" },
    enableDensityToggle: false,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    renderTopToolbarCustomActions: () => (
      <h6 className="table_heading">
        <strong>Customer Info</strong>
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

export default CustomerInfo;
