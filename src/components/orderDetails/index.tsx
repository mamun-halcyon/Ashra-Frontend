import { API_URL } from "@/constant";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../button";
import FormatPrice from "../price-formate";
import TextAreaGroup from "../textarea";
import "./index.scss";

type Inputs = {
  message: string;
};
type IProps = {
  item: any;
};
const SingleOrderDetails: React.FC<IProps> = ({ item }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const { login } = useAppSelector((state) => state.login);
  const [isOpen, setIsOpen] = useState(false);
  const [attributes, setAttributes] = useState<any[]>([]);

  const handleRefunds = async (data: { message: string }) => {
    const { message } = data;
    const refundData = {
      customer_id: login?.user.id,
      order_id: item.order_id,
      product_id: item.product_id,
      product_name: item.product_name,
      product_price: item.discount_price ?? item.regular_price,
      refund_status: "pending",
      message,
    };

    try {
      const response = await axios.post(`${API_URL}/refunds`, refundData, {
        headers: {
          Authorization: `Bearer ${login?.accessToken}`,
        },
      });
      if (response?.status === 201) {
        toast.success(response.data.message);
        setIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      if (item?.product_attribute !== "") {
        setAttributes(JSON.parse(item?.product_attribute));
      }
    } catch (err) {
      console.log(err);
      setAttributes([]);
    }
  }, [item?.product_attribute]);

  return (
    <>
      <tr className=" font-normal font-gotham text-sm table-border p-2">
        <td className="px-6 py-4">{item?.product_name}</td>
        <td className="px-6 py-4">{item?.quantity}</td>
        <td className="px-6 py-4">
          {attributes?.length > 0 ? (
            attributes?.map((attr, index) => (
              <div
                className=" capitalize"
                key={index}
              >{`${attr?.attribute_key.replace("_", " ")} : ${
                attr?.attribute_name
              }`}</div>
            ))
          ) : (
            <></>
          )}
        </td>
        <td className="px-4 py-4">
          ৳{" "}
          {item?.discount_price
            ? FormatPrice(item?.discount_price)
            : FormatPrice(item?.regular_price)}
        </td>
        <td className="px-6 py-4">
          {isOpen ? (
            <form
              onSubmit={handleSubmit(handleRefunds)}
              className="refund-area"
            >
              <Controller
                name="message"
                control={control}
                rules={{
                  required: "Message is required",
                  pattern: {
                    value: /\S/,
                    message: "Enter valid message",
                  },
                }}
                render={({ field }) => (
                  <TextAreaGroup
                    title="Message *"
                    value={field.value}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      field.onChange(e.target.value)
                    }
                    required
                  />
                )}
              />
              {errors.message && (
                <p className=" font-gotham text-xs warning">
                  {errors.message.message}
                </p>
              )}
              <Button type="submit" className="px-3 py-1">
                Apply Now
              </Button>
            </form>
          ) : (
            <Button onClick={() => setIsOpen(true)} className="px-3 py-1">
              Apply Now
            </Button>
          )}
        </td>
      </tr>
    </>
  );
};

export default SingleOrderDetails;
