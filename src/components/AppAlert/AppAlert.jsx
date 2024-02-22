import { ToastContainer, Zoom, toast } from "react-toastify";

export const alert = (msg = null, res) => {
  return toast.promise(res, {
    pending: "Loading...",
    success: msg,
    error: {
      render({ data }) {
        return data.code === "auth/code-expired" ? "OTP Expired !" : "Incorrect OTP !";
      },
    },
  });
};

export const alertPromise = (res) => {
  return toast.promise(res, {
    pending: "Loading...",
    success: {
      render({ data }) {
        return data?.data?.message || "Success";
      },
    },
    error: {
      render({ data }) {
        return data?.response?.data?.message || data?.response?.data || "Network Error !";
      },
    },
  });
};

export const AppAlert = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme="light"
      // limit={5}
      className="mt-5"
      transition={Zoom}
    />
  );
};

export const alertError = (msg) => {
  return toast.error(msg);
};

export const alertSuccess = (msg) => {
  return toast.success(msg);
};
