import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = (dependency = []) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, ...dependency]);
};

export default useScrollToTop;
