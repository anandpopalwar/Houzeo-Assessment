import { useEffect } from "react";

export const HandleClickOutSide = (ref, cbFunc) => {
  const runFun = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      cbFunc();
    }
  };

  useEffect(() => {
    document.addEventListener("click", runFun);
    return () => {
      document.removeEventListener("click", runFun);
    };
  });
};
