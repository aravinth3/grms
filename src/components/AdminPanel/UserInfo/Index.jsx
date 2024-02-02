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
    user_type: "Admin",
    name: "Aravinth",
    mobile: "7339054025",
    email: "arruaravinth3@gmail.com",
    user: "Admin",
  },
  {
    sn: "2",
    user_type: "Staff",
    name: "Ganesh",
    mobile: "9344212742",
    email: "ganesh3@gmail.com",
    user: "Staff",
  },
  {
    sn: "2",
    user_type: "Staff",
    name: "Ganesh",
    mobile: "9344212742",
    email: "ganesh3@gmail.com",
    user: "Staff",
  },
];

const UserInfo = () => {
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
        accessorKey: "user_type",
        header: "User Type",
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
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "user",
        header: "User Name",
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
        <strong>User Info</strong>
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

export default UserInfo;
