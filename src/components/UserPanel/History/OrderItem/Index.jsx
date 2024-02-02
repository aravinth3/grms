import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { CgExport } from "react-icons/cg";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { IoIosArrowForward } from "react-icons/io";
import "./Style.css";
import { NavLink } from "react-router-dom";
// import { Nav, NavLink } from "react-bootstrap";
const data = [
  {
    sn: "1",
    name: "Aravinth",
    prod_code: "A123",
    prod_name: "Lamination",
    size: "25*40",
    quantity: "2",
    photo_no: "852",
    output_type: "Sample",
    other_info: "Need Today",
    price: "500",
  },
  {
    sn: "1",
    name: "Aravinth",
    prod_code: "A123",
    prod_name: "Lamination",
    size: "25*40",
    quantity: "2",
    photo_no: "852",
    output_type: "Sample",
    other_info: "Need Today",
    price: "500",
  },
  {
    sn: "1",
    name: "Aravinth",
    prod_code: "A123",
    prod_name: "Lamination",
    size: "25*40",
    quantity: "2",
    photo_no: "852",
    output_type: "Sample",
    other_info: "Need Today",
    price: "500",
  },
  {
    sn: "1",
    name: "Aravinth",
    prod_code: "A123",
    prod_name: "Lamination",
    size: "25*40",
    quantity: "2",
    photo_no: "852",
    output_type: "Sample",
    other_info: "Need Today",
    price: "500",
  },
];

const OrderItem = () => {
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
        <strong>Order Item</strong>
        <CgExport className="export-icon ms-3" style={{ fontSize: "19px", cursor: "pointer" }} onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)} />
      </h6>
    ),
  });
  return (
    <div>
      <h5 className="orderitem-clientname ms-3 mb-4">
        Welcome <strong>Aravinth</strong>
      </h5>
      <span className="history-links ms-3">
        <NavLink>Confirm Orders </NavLink>
        <IoIosArrowForward /> <NavLink>Order Item</NavLink>
      </span>

      {/* <span className="history-links ms-3 ">
        <NavLink>Confirm Orders</NavLink> <IoIosArrowForward /> <NavLink>Order Item</NavLink>
      </span> */}
      <div className="customer-profile container-fluid mt-3">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default OrderItem;
