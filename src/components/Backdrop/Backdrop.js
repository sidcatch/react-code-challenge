import React, { useEffect } from "react";

import classNames from "classnames/bind";
import backdropStyle from "./Backdrop.module.css";

let cx = classNames.bind(backdropStyle);

const Backdrop = ({ onclick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  });

  return <div className={cx({ backdrop: true })} onClick={onclick}></div>;
};

export default Backdrop;
