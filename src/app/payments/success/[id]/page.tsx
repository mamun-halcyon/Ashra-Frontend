"use client";
import React, { useEffect } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import "./page.scss";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/features/cart/cartSlice";
import Image from "next/image";

const ConfirmOrder = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());
    setTimeout(() => {
      router.push("/profile/order");
    }, 5000);
  }, [dispatch, router]);

  return (
    <div className="order-confirm">
      <div className="wrapper shadow">
      <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <Image
            className="w-[400px] h-[200px]"
            width={200}
            height={200}
            alt="404"
            src={"/assets/images/payment/Success.png"}
            property="true"
          />
        </div>
        <h2 className=" font-gotham font-medium title">Success</h2>
        <p className=" font-gotham text">
          We received your purchase request.
          <br /> we&apos;ll be in touch shortly!
        </p>
      </div>
    </div>
  );
};

export default ConfirmOrder;
