"use client";
import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import "./page.scss";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";

type Props = {
  params: {
    id: string;
  };
};

const CancelOrder = ({ params: { id } }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [dispatch, router]);

  return (
    <div className="order-cancel">
      <div className="wrapper shadow">
        <div className="icon">
          <RxCross1 className="check" />
        </div>
        <h2 className=" font-gotham font-medium title">Canceled !</h2>
        <p className=" font-gotham text">
          We don&apos;t received your purchase request with TrxID: {id}
          <br />
          Please Try Again !
        </p>
      </div>
    </div>
  );
};

export default CancelOrder;
