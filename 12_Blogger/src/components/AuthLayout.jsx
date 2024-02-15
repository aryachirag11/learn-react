import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStaus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //TODO: make it more easy to understand

    if (authentication && authStaus !== authentication) {
      navigateToAuth("/login");
    } else if (!authentication && authStaus !== authentication) {
      navigateToAuth("/");
    }
    setLoader(false);
  }, [authStaus, navigate, authentication]);
  return loader ? <h1>Loading....</h1> : <>{children}</>;
}
