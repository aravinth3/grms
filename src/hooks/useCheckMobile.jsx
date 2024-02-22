import React from "react";

const useCheckMobile = (screenSize = 767) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= screenSize);
    };
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [screenSize]);

  return isMobile;
};

export default useCheckMobile;
