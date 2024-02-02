import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const data = [
  {
    id: "123",
    product_code: "1100",
    product_name: "Passport size",
    width: "100",
    height: "100",
    unit: "mm",
    price: "150",
    quantity: "2",
    output_type: "print",
  },
  {
    id: "123",
    product_code: "1100",
    product_name: "Passport size",
    width: "100",
    height: "100",
    unit: "mm",
    price: "150",
    quantity: "2",
    output_type: "print",
  },
  {
    id: "123",
    product_code: "1100",
    product_name: "Passport size",
    width: "100",
    height: "100",
    unit: "mm",
    price: "150",
    quantity: "2",
    output_type: "print",
  },
  {
    id: "123",
    product_code: "1100",
    product_name: "Passport size",
    width: "100",
    height: "100",
    unit: "mm",
    price: "150",
    quantity: "2",
    output_type: "print",
  },
  {
    id: "123",
    product_code: "1100",
    product_name: "Passport size",
    width: "100",
    height: "100",
    unit: "mm",
    price: "150",
    quantity: "2",
    output_type: "print",
  },
];

const ViewProducts = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "ID",
        size: 150,
      },
      {
        accessorKey: "product_code",
        header: "Product Code",
        size: 150,
      },
      {
        accessorKey: "product_name", //normal accessorKey
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
        accessorKey: "unit",
        header: "Unit",
        size: 150,
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
        accessorKey: "output_type",
        header: "Output Type",
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
        <strong>Products</strong>
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

export default ViewProducts;
