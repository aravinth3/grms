import CreateProducts from "@/components/AdminPanel/AddProduct/Index";
import Login from "@/components/Login/Login";
import ViewProducts from "@/components/AdminPanel/ViewProducts/Index";
import DashLayout from "@/pages/DashLayout/DashLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmOrders from "@/components/AdminPanel/ConfirmOrders/Index";
import Orders from "@/components/AdminPanel/Orders/Index";
import CustomerInfo from "@/components/AdminPanel/CustomerInfo/Index";
import AdvancePayment from "@/components/AdminPanel/AdvancePayment/Index";
import UserInfo from "@/components/AdminPanel/UserInfo/Index";
import HomeUserPanel from "@/components/UserPanel/HomeUserPanel/Index";
import NewOrders from "@/components/UserPanel/NewOrder/Index";
import UserConfirmOrders from "@/components/UserPanel/NewOrder/UserConfirmOders/Index";
import Advance from "@/components/UserPanel/Advance/Index";
import ConfirmHistory from "@/components/UserPanel/History/Confirm-History/Index";
import OrderItem from "@/components/UserPanel/History/OrderItem/Index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/admin" element={<DashLayout />}>
          <Route path="add-products" element={<CreateProducts />} />
          <Route path="products" element={<ViewProducts />} />
          <Route path="Confirm-orders" element={<ConfirmOrders />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customer-info" element={<CustomerInfo />} />
          <Route path="advance-payment" element={<AdvancePayment />} />
          <Route path="user-info" element={<UserInfo />} />
        </Route>

        <Route path="/dashboard/user" element={<DashLayout />}>
          <Route index element={<HomeUserPanel />} />
          <Route path="new-order" element={<NewOrders />} />
          <Route path="userconfirm-orders" element={<UserConfirmOrders />} />
          <Route path="advance" element={<Advance />} />
          <Route path="confirm-history" element={<ConfirmHistory />} />
          <Route path="order-items" element={<OrderItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
