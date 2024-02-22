import useFetch from "@/hooks/useFetch";

const ViewSingleCustomerOrder = ({ orderId }) => {
  const { data } = useFetch(`/order-customer/products?order_id=${orderId}`);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product No</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {data?.appData?.map((item, i) => (
            <tr key={i}>
              <td>PhotoCopy</td>
              <td>{item?.photo_no}</td>
              <td>{item?.other_info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSingleCustomerOrder;
