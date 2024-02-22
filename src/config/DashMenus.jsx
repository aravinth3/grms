import { MdOutlineNewLabel } from "react-icons/md";

const dashMenus = (menuSet) => {
  // const {data} = useFetchUser(`/role-menu`);
  // console.log(data);
  const menus = {
    1: [
      {
        name: "Confirm Orders",
        link: `/dashboard/admin/confirm-orders`,
        icon: <MdOutlineNewLabel />,
      },
      {
        name: "Orders",
        link: `/dashboard/admin/orders`,
        icon: <MdOutlineNewLabel />,
      },
      {
        name: "Customer Info",
        link: `/dashboard/admin/customer-info`,
        icon: <MdOutlineNewLabel />,
      },
      {
        name: "Advance Payment",
        link: `/dashboard/admin/advance-payment`,
        icon: <MdOutlineNewLabel />,
      },
      // {
      //   name: "User Info",
      //   link: `/dashboard/admin/user-info`,
      //   icon: <MdOutlineNewLabel />,
      // },
      {
        name: "Products",
        link: `/dashboard/admin/add-products`,
        icon: <MdOutlineNewLabel />,
      },
    ],

    2: [
      {
        name: "Home",
        link: `/dashboard/user`,
        icon: <MdOutlineNewLabel />,
      },
      {
        name: "New Order",
        link: `/dashboard/user/new-order`,
        icon: <MdOutlineNewLabel />,
      },
      {
        name: "Advance",
        link: `/dashboard/user/advance`,
        icon: <MdOutlineNewLabel />,
      },
      {
        name: "History",
        link: `/dashboard/user/confirm-history`,
        icon: <MdOutlineNewLabel />,
      },
    ],
  };

  let menusItems = menus[menuSet];
  return menusItems;
};

export default dashMenus;
