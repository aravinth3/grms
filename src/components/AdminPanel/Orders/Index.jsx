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
    order_id: "123",
    mobile: "7339054025",
    prod_code: "LM123",
    prod_name: "24 * 40 laminations",
    size: "24 * 40",
    quantity: "2",
    photo_no: "45",
    output_type: "Lamination",
    other_info: "Parcel this into a gift wrapper",
    price: "1500",
  },
  {
    sn: "1",
    name: "Aravinth",
    order_id: "123",
    mobile: "7339054025",
    prod_code: "LM123",
    prod_name: "24 * 40 laminations",
    size: "24 * 40",
    quantity: "2",
    photo_no: "45",
    output_type: "Lamination",
    other_info: "Parcel this into a gift wrapper",
    price: "1500",
  },
  {
    sn: "1",
    name: "Aravinth",
    order_id: "123",
    mobile: "7339054025",
    prod_code: "LM123",
    prod_name: "24 * 40 laminations",
    size: "24 * 40",
    quantity: "2",
    photo_no: "45",
    output_type: "Lamination",
    other_info: "Parcel this into a gift wrapper",
    price: "1500",
  },
  {
    sn: "1",
    name: "Aravinth",
    order_id: "123",
    mobile: "7339054025",
    prod_code: "LM123",
    prod_name: "24 * 40 laminations",
    size: "24 * 40",
    quantity: "2",
    photo_no: "45",
    output_type: "Lamination",
    other_info: "Parcel this into a gift wrapper",
    price: "1500",
  },
];

const Orders = () => {
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
        accessorKey: "prod_code",
        header: "Product/Service Code",
        size: 150,
      },
      {
        accessorKey: "prod_name",
        header: "Product/Service Name",
        size: 150,
      },
      {
        accessorKey: "size",
        header: "Size",
        size: 150,
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 150,
      },
      {
        accessorKey: "photo_no",
        header: "Photo No",
        size: 150,
      },
      {
        accessorKey: "output_type",
        header: "Output Type",
        size: 150,
      },
      {
        accessorKey: "other_info",
        header: "Other Info",
        size: 150,
      },
      {
        accessorKey: "price",
        header: "Price",
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
        <strong>Orders</strong>
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

export default Orders;
