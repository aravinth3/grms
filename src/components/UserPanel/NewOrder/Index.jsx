import "./Style.css";
import { useEffect, useState } from "react";
import privateAPI from "@/api/privateAPI";
import { alertPromise } from "@/components/AppAlert/AppAlert";
import useFetch from "@/hooks/useFetch";
import { useNavigate } from "react-router-dom";

const NewOrders = () => {
  const navigate = useNavigate();
  const customer_id = localStorage.getItem("customer_id");
  const { data } = useFetch("/products");

  const { data: units } = useFetch("/units");
  const { data: outputTypes } = useFetch("/output-types");
  const { data: getAdvance } = useFetch(`customer-advance?customer_id=${customer_id}`);

  const [order, setOrder] = useState({
    delivery_date: "",
    advance_date: "",
    total_amount: "",
    advance_amount: "",
    balance_amount: "",
  });

  const [product, setProduts] = useState([
    {
      product_id: "",
      name: "",
      width: "",
      height: "",
      unit: "",
      price: "",
      output: "",
      quantity: "",
      photo_no: "",
      other_info: "",
    },
  ]);

  const onChangeInfo = (e, pind) => {
    const { name, value } = e.target;

    const filteredProduct = data?.appData?.filter((p) => p.id === value);

    setProduts((pr) => {
      return pr.map((_, i) => (i === pind ? filteredProduct[0] : _));
    });

    setOrder((p) => {
      return { ...p, [name]: value };
    });
  };

  useEffect(() => {
    let total_amount = product?.reduce((a, { price, quantity }) => {
      return a + parseInt(price * quantity);
    }, 0);
    let balance_amount = parseInt(getAdvance?.appData?.[0]?.advance_amount - total_amount);
    let advance_amount = getAdvance?.appData?.[0]?.advance_amount;
    setOrder((p) => {
      return { ...p, total_amount, balance_amount, advance_amount };
    });
  }, [product]);

  const handelAddProducts = () => {
    const new_product = {
      product_id: "",
      name: "",
      width: "",
      height: "",
      unit: "",
      price: "",
      output: "",
      quantity: "",
      photo_no: "",
      other_info: "",
    };
    setProduts((p) => {
      return [...p, new_product];
    });
  };

  const handleDelete = (index) => {
    let data = [...product];
    data.splice(index, 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = privateAPI.post(`/order`, { ...order, product, customer_id });
    await alertPromise(res);
    navigate("/dashboard/user");
  };

  return (
    <div className="new-orders container ">
      <h4 className="app_title">NEW ORDER</h4>

      <div className="add-orders">
        <form onSubmit={handleSubmit}>
          <div className="app_bg p-3">
            {product?.map((item, i) => (
              <div key={i}>
                <div className="row">
                  <div className="col-10 p-2">
                    <label className="app_label">Product / Service Name</label>
                    <select className="app_input" required onChange={(e) => onChangeInfo(e, i)} name="product_id">
                      <option>Select Product / Service Name</option>
                      {data?.appData?.map((itemData, i) => (
                        <option key={i} value={itemData?.id}>
                          {itemData?.product_code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-2 p-2 mt-4">
                    <button className="app_btn success w-100 mt-1" onClick={handelAddProducts}>
                      Add Another
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 p-2">
                    <label className="app_label ">Name</label>
                    <input type="text" value={item.name} className="app_input" disabled />
                  </div>
                  <div className="col-2 p-2">
                    <label className="app_label ">Width</label>
                    <input type="text" className="app_input" value={item.width} disabled />
                  </div>
                  <div className="col-2 p-2">
                    <label className="app_label ">Height</label>
                    <input type="text" className="app_input" value={item.height} disabled />
                  </div>
                  <div className="col-2 p-2">
                    <label className="app_label">Unit</label>
                    <input type="text" className="app_input" value={units?.appData?.filter((m) => m.id === item.unit_id)?.[0]?.unit_name} disabled />
                  </div>

                  <div className="col-2 p-2">
                    <label className="app_label ">Price</label>
                    <input type="text" className="app_input" value={item.price} disabled />
                  </div>
                  <div className="col-2 p-2">
                    <label className="app_label">Output</label>
                    <input type="text" className="app_input" value={outputTypes?.appData?.filter((m) => m.id === item.unit_id)?.[0]?.output_type_name} disabled />
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 p-2">
                    <label className="app_label ">Quantity</label>
                    <input
                      type="text"
                      className="app_input"
                      required
                      onChange={(e) =>
                        setProduts((p) => {
                          let d = [...p];
                          d[i].quantity = e.target.value;
                          return d;
                        })
                      }
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label className="app_label ">Photo No</label>
                    <input
                      type="text"
                      className="app_input"
                      required
                      onChange={(e) =>
                        setProduts((p) => {
                          let d = [...p];
                          d[i].photo_no = e.target.value;
                          return d;
                        })
                      }
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label className="app_label ">Other Info</label>
                    <input
                      type="text"
                      className="app_input"
                      required
                      onChange={(e) =>
                        setProduts((p) => {
                          let d = [...p];
                          d[i].other_info = e.target.value;
                          return d;
                        })
                      }
                    />
                  </div>
                </div>

                <div className=" w-25">
                  <button className="btn btn-danger mt-1">Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div className="app_bg p-3 mt-3">
            <div className="row">
              <div className="col-6 p-2">
                <label className="app_label">Delivery Date</label>
                <input type="date" className="app_input" required name="delivery_date" onChange={onChangeInfo} />
              </div>
              <div className="col-6 p-2">
                <label className="app_label">Advance Date</label>
                <input type="date" className="app_input " required name="advance_date" onChange={onChangeInfo} />
              </div>
            </div>

            <div className="row">
              <div className="col-4 p-2">
                <label className="app_label mt-3">Total Amount</label>
                <input type="number" className="app_input " value={order?.total_amount} required name="total_amount" onChange={onChangeInfo} />
              </div>
              <div className="col-4 p-2">
                <label className="app_label mt-3">Advance Amount</label>
                <input type="number" className="app_input " required name="advance_amount" value={order?.advance_amount} onChange={onChangeInfo} />
              </div>
              <div className="col-4 p-2">
                <label className="app_label mt-3">Balance Amount</label>
                <input type="number" className="app_input " required name="balance_amount" value={order?.balance_amount || "0"} onChange={onChangeInfo} />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-9">
              {/* <button to="/dashboard/products" className=" app_btn danger">
                View Products
              </button> */}
            </div>
            <div className="col-3">
              <div className="row ">
                <div className="col-6 p-1">{/* <button className="app_btn danger">Add Another</button> */}</div>
                <div className="col-6 p-1">
                  <button href="/dashboard/user/userconfirm-orders" className="app_btn success w-100" type="submit">
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewOrders;

// "customer_id" : 1,
//   "delivery_date" : "2024-02-05",
//   "advance_date" : "2024-02-01",
//   "total_amount" : 1000,
//   "advance_amount" : 500,
//   "balance_amount" : 500,
//   "order_services": [
//     {
//       "product_id": "1",
//       "photo_no": "100",
//       "other_info": "Remarks"
//     },
//      {
//       "product_id": "1",
//       "photo_no": "101",
//       "other_info": "Remarks"
//     }
