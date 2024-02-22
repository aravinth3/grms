import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import { CgExport } from "react-icons/cg";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import useFetch from "@/hooks/useFetch";

const Orders = () => {
  const { data: orderData } = useFetch("/orders-products");

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
        accessorKey: "photo_no",
        header: "Photo No",
        size: 150,
      },
      {
        accessorKey: "height",
        header: "Height",
        size: 150,
      },
      {
        accessorKey: "width",
        header: "Width",
        size: 150,
      },

      {
        accessorKey: "product_code",
        header: "Product Code",
        size: 150,
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 150,
      },
      {
        accessorKey: "unit_name",
        header: "Unit",
        size: 150,
      },
      {
        accessorKey: "output_type_name",
        header: "Output Type",
        size: 150,
      },
      {
        accessorKey: "other_info",
        header: "Remarks",
        size: 150,
      },
      // {
      //   accessorKey: "output_type",
      //   header: "Output Type",
      //   size: 150,
      // },
      // {
      //   accessorKey: "other_info",
      //   header: "Other Info",
      //   size: 150,
      // },
      // {
      //   accessorKey: "price",
      //   header: "Price",
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
    data: orderData?.appData ? orderData?.appData : [],
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
