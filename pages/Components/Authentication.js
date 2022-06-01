import React, { useEffect, useState } from "react";
import Router from "next/router";

const Authentication = ({ children }) => {
  const [data, setdata] = useState();
  useEffect(() => {
    var user = sessionStorage.getItem("id");
    setdata(sessionStorage.getItem("id"));
    if (!user) {
      Router.push("/");
    }
  }, [Router]);

  return <>{data && children}</>;
};

export default Authentication;
