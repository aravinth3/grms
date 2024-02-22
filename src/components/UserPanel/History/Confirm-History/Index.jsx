import { useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import { CgExport } from "react-icons/cg";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import "./Style.css";
import useFetch from "@/hooks/useFetch";
import AppModal from "@/components/Modal/AppModal";
import ViewSingleCustomerOrder from "@/components/Modal/viewSingleCustomerOrder";

const ConfirmHistory = () => {
  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState("");
  const customer_id = localStorage.getItem("customer_id");
  const customer_name = localStorage.getItem("customer_name");
  const { data: cusOrd } = useFetch(`/order-customer?customer_id=${customer_id}`);
  console.log(cusOrd);

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
        accessorKey: "delivery_date",
        header: "Delivery Date",
        size: 150,
      },
      {
        accessorKey: "advance_date",
        header: "Advance Date",
        size: 150,
      },

      {
        accessorKey: "total_amount",
        header: "Total Amount",
        size: 150,
      },
      {
        accessorKey: "advance_amount",
        header: "Advance",
        size: 150,
      },
      {
        accessorKey: "balance_amount",
        header: "Balance",
        size: 150,
      },
      // {
      //   accessorKey: "full_payment",
      //   header: "Full Payment",
      //   size: 150,
      // },
      {
        accessorKey: "BRANCH_CODE",
        header: "Action",
        Cell: (d) => {
          return (
            <div className="dual-icon">
              <NavLink
                className="action_icon"
                onClick={() => {
                  setOpen(true);
                  setOrderId(d?.row?.original?.id);
                }}
              >
                <MdRemoveRedEye />
                <span>View</span>
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
    data: cusOrd?.appData ? cusOrd?.appData : [],
    initialState: { density: "compact" },
    enableDensityToggle: false,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    renderTopToolbarCustomActions: () => (
      <h6 className="print_btn" onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)}>
        <CgExport /> EXPORT
      </h6>
    ),
  });
  return (
    <>
      <div className="container-fluid">
        <h5 className="history-clientname mb-4">
          Welcome <strong>{customer_name}</strong>
        </h5>
        <div className="customer-profile mt-4">
          <MaterialReactTable table={table} />
        </div>
      </div>
      <AppModal
        show={open}
        handleClose={() => {
          setOpen(false);
        }}
        title="Products"
      >
        <ViewSingleCustomerOrder orderId={orderId} setOpen={setOpen} />
      </AppModal>
    </>
  );
};

export default ConfirmHistory;
