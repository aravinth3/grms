const dashMenus = (menuSet) => {
  // const {data} = useFetchUser(`/role-menu`);
  // console.log(data);
  const menus = {
    1: [
      {
        name: "Confirm Orders",
        link: `/dashboard/admin/confirm-orders`,
      },
      {
        name: "Orders",
        link: `/dashboard/admin/orders`,
      },
      {
        name: "Customer Info",
        link: `/dashboard/admin/customer-info`,
      },
      {
        name: "Advance Payment",
        link: `/dashboard/admin/advance-payment`,
      },
      {
        name: "User Info",
        link: `/dashboard/admin/user-info`,
      },
      {
        name: "Products",
        link: `/dashboard/admin/add-products`,
      },
    ],

    2: [
      {
        name: "New Order",
        link: `/dashboard/user/new-order`,
      },
      {
        name: "Advance",
        link: `/dashboard/user/advance`,
      },
      {
        name: "History",
        link: `/dashboard/user/confirm-history`,
      },
    ],
  };

  let menusItems = menus[menuSet];
  return menusItems;
};

export default dashMenus;
