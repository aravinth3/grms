import { useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import "./Style.css";
import useFetch from "@/hooks/useFetch";
import { ButtonGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AppModal from "@/components/Modal/AppModal";
import PayBalance from "@/components/Modal/PayBalance";
import PayAdvance from "@/components/Modal/PayAdvance";

const HomeUserPanel = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState("");
  const customer_id = localStorage.getItem("customer_id");
  const customer_name = localStorage.getItem("customer_name");
  const { data: balance } = useFetch(`/order-balance?customer_id=${customer_id}`);
  const { data: advance } = useFetch(`/customer-advance?customer_id=${customer_id}`);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 150,
      },

      {
        accessorKey: "delivery_date",
        header: "Delivery Date",
        size: 150,
      },
      {
        accessorKey: "advance_date",
        header: " Advance Date",
        size: 150,
      },
      {
        accessorKey: "total_amount",
        header: "Total Amount",
        size: 150,
      },
      {
        accessorKey: "advance_amount",
        header: "Advance Amount",
        size: 150,
      },
      {
        accessorKey: "balance_amount",
        header: "Balance",
        size: 150,
      },
      {
        accessorKey: "incentive_amount",
        header: "Action",
        Cell: (d) => {
          return (
            <ButtonGroup className="button">
              <NavLink
                className="text-decoration-none bg-success text-white p-2 rounded mt-2 me-1"
                onClick={() => {
                  setOpen(true);
                  setOrderId(d?.row?.original?.id);
                }}
              >
                Pay Balance
              </NavLink>
            </ButtonGroup>
          );
        },
      },
    ],
    []
  );

  const pay_columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 150,
      },
      {
        accessorKey: "advance_amount",
        header: "Advance Amount",
        size: 150,
      },
      {
        accessorKey: "incentive_amount",
        header: "Action",
        Cell: () => {
          return (
            <ButtonGroup className="button">
              <NavLink
                className="text-decoration-none bg-success text-white p-2 rounded mt-2 me-1"
                onClick={() => {
                  setShow(true);
                }}
              >
                Pay Advance
              </NavLink>
            </ButtonGroup>
          );
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: balance?.appData ? balance?.appData : [],
    initialState: { density: "compact" },
    enableDensityToggle: false,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    renderTopToolbarCustomActions: () => (
      <h6 className="table_heading">
        <strong>Balance</strong>
      </h6>
    ),
  });

  const pay_table = useMaterialReactTable({
    columns: pay_columns,
    data: advance?.appData ? advance?.appData : [],
    initialState: { density: "compact" },
    enableDensityToggle: false,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    renderTopToolbarCustomActions: () => (
      <h6 className="table_heading">
        <strong>Advance</strong>
      </h6>
    ),
  });
  return (
    <>
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="client-name">
            Welcome <strong>{customer_name.toUpperCase()}</strong>
          </h5>
          <NavLink
            to="/customer-status"
            className="text-decoration-none btn btn-success"
            onClick={() => {
              localStorage.removeItem("customer_id");
              localStorage.removeItem("customer_name");
            }}
          >
            New Customer
          </NavLink>
        </div>
        <div className="customer-profile container-fluid mt-3">
          <MaterialReactTable table={table} />
          <div className="mt-5">
            <MaterialReactTable table={pay_table} />
          </div>
        </div>
      </div>
      <AppModal
        show={open}
        handleClose={() => {
          setOpen(false);
        }}
        title="Pay Balance"
      >
        <PayBalance orderId={orderId} setOpen={setOpen} />
      </AppModal>
      <AppModal
        show={show}
        handleClose={() => {
          setShow(false);
        }}
        title="Pay Advance"
      >
        <PayAdvance setShow={setShow} />
      </AppModal>
    </>
  );
};

export default HomeUserPanel;
