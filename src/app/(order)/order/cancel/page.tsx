import React from "react";
import { RxCross1 } from "react-icons/rx";
import "./page.scss";

const ConfirmOrder = () => {
  return (
    <div className="order-cancel">
      <div className="wrapper shadow">
        <div className="icon">
          <RxCross1 className="check" />
        </div>
        <h2 className=" font-gotham font-medium title">Failed !</h2>
        <p className=" font-gotham text">
          We don&apos;t received your purchase request.
          <br />
          Please Try Again !
        </p>
      </div>
    </div>
  );
};

export default ConfirmOrder;
