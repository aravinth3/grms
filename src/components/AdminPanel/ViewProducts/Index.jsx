import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import useFetch from "@/hooks/useFetch";

const ViewProducts = () => {
  const { data } = useFetch(`/products`);
  const { data: units } = useFetch("/units");
  const { data: output } = useFetch("/output-types");

  const columns = useMemo(
    () => [
      // {
      //   accessorKey: "id", //access nested data with dot notation
      //   header: "ID",
      //   size: 150,
      // },
      {
        accessorKey: "product_code",
        header: "Product Code",
        size: 150,
      },
      {
        accessorKey: "name", //normal accessorKey
        header: "Product Name",
        size: 200,
      },
      {
        accessorKey: "width",
        header: "Width",
        size: 150,
      },
      {
        accessorKey: "height",
        header: "Height",
        size: 150,
      },
      {
        accessorKey: "unit_name",
        header: "Unit",
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 150,
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 150,
      },
      {
        accessorKey: "output_type_name",
        header: "Output Type",
      },
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
    data: data?.appData ? data?.appData : [],
    initialState: { density: "compact" },
    enableDensityToggle: false,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    renderTopToolbarCustomActions: () => (
      <h6 className="table_heading">
        <strong>Products</strong>
      </h6>
    ),
  });
  return (
    <div>
      <div className="text-end">
        <NavLink to="/dashboard/admin/add-products" className="prod-link app_btn danger">
          Add product
        </NavLink>
      </div>
      <div className="customer-profile container-fluid mt-3">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default ViewProducts;
