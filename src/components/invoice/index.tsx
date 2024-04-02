import Image from "next/image";
import "./index.scss";

const Invoice = ({
  order,
  amountBeforeCoupon,
  shipingCost,
  finalPrice,
}: any) => {
  return (
    <div className="invoice white-bg hidden">
      <div className="invoice-header">
        <div className="title">
          <Image
            className="w-full"
            src="/assets/images/invoice/home_appliance.png"
            alt="invoice"
            width={800}
            height={400}
          />
        </div>
        <h4 className="customer-details white-bg black-text mt-5">
          Customer Details
        </h4>
        <div className="details secondary-bg mr-2 p-1">
          <div className="left">
            <p className="font-gotham text-sm font-normal">
              Name: {order.name}
            </p>
            <p className="font-gotham text-sm font-normal">
              Email: {order.email}
            </p>
            <p className="font-gotham text-sm font-normal">
              Phone: {order.mobile}{" "}
            </p>
            <p className="font-gotham text-sm font-normal max-w-[250px]">
              Address: {order.address}{" "}
            </p>
          </div>
          <div className="order-details  secondary-bg p-1 right">
            <p className=" font-gotham text-sm font-normal">
              Order No: {order.id}
            </p>
            <p className="">Order Status: {order.order_status}</p>
            <p className="">Shipping method: {order?.delivery_method}</p>
            <p className=" font-gotham text-sm font-normal">
              Invoice No: {order.order_prefix}-{order.id}
            </p>
            <p className="">Total: ৳{finalPrice + order.delivery_fee}</p>
          </div>
        </div>
      </div>

      {/* <div className="invoice-body">
        <p>Bill to:</p>
        <p>Iftakher</p>
        <p> House: 12, Road: 01, Block I. Basundhara R/A, Dhaka, Bangladesh </p>
        <p>Email: iftebmw@gmail.com</p>
        <p>Phone: 01976100280</p>
      </div> */}
      <table className="w-full">
        <thead>
          <tr className="secondary-bg text-left table-border">
            <th className="table-border">SL.</th>
            <th className="table-border">Description</th>
            <th className="table-border">Attribute</th>
            <th className="table-border">Qty</th>
            <th className="table-border">Unit Price (BDT)</th>
            <th className="table-border">Total</th>
          </tr>
        </thead>
        <tbody>
          {order?.orderItems?.map((product: any, index: any) => (
            <tr key={index} className="product-a">
              <td className="table-border">{index + 1}</td>
              <td className="table-border">{product.product_name}</td>
              <td className="table-border">
                {product.product_attribute
                  ? JSON.parse(product.product_attribute).map(
                      (v: any, i: number) => (
                        <span className="variant" key={i}>
                          {`${i ? "," : ""}${v.attribute_name}`}
                        </span>
                      )
                    )
                  : "-"}
              </td>
              <td className="table-border"> {product.quantity}</td>
              <td className="table-border"> ৳ {product.discount_price}</td>
              <td className="table-border">
                {" "}
                ৳ {product.discount_price * product.quantity}
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan={4}>
              <h3>Notes:</h3>
              <p>
                1. All our products come with a one-year service warranty. To
                claim the warranty, please present this invoice.
              </p>
              <p>
                2. Please ensure to check for any physical damage to the product
                upon receiving it. After receiving the product, no claims for
                physical damage will be accepted.
              </p>
              <p>
                3. For official installation, please inform us upon receiving
                the product if the customer wishes for us to install it. We will
                require 24 hours to complete the installation.
              </p>
            </td>
            <td>Regular Price</td>
            <td> ৳ {amountBeforeCoupon} </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Delivery</td>
            <td> ৳ {shipingCost}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Discount</td>
            <td>৳ {amountBeforeCoupon - finalPrice}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td> ৳ {finalPrice + shipingCost} </td>
          </tr>
        </tbody>
      </table>

      {/* <div className="invoice-table">
        <div className="grid grid-cols-10 secondary-bg">
          <div className=" col-span-1 font-gotham text-sm font-normal">
            SL.{" "}
          </div>
          <div className=" col-span-4 font-gotham text-sm font-normal px-1">
            Description
          </div>
          <div className=" col-span-1 font-gotham text-sm font-normal">
            Variant
          </div>
          <div className=" col-span-1 font-gotham text-sm font-normal">Qty</div>
          <div className=" col-span-2 font-gotham text-sm font-normal">
            Unit price (BDT)
          </div>
          <div className=" col-span-1 font-gotham text-sm font-normal">
            Total
          </div>
        </div>
        {
          <>
            {order?.orderItems?.map((product: any, index: any) => (
              <div
                className="grid grid-cols-10 font-gotham text-sm font-normal"
                key={index}
              >
                <div className=" col-span-1 font-gotham text-sm font-normal">
                  {index + 1}
                </div>
                <div className=" col-span-4 px-1">{product.product_name}</div>
                <div className=" col-span-1 font-gotham text-sm font-normal">
                  -
                </div>
                <div className=" col-span-1 font-gotham text-sm font-normal">
                  {product.quantity}
                </div>
                <div className=" col-span-2 font-gotham text-sm font-normal">
                  {product.discount_price}
                </div>
                <div className="col-span-1 font-gotham text-sm font-normal">
                  ৳ {product.discount_price * product.quantity}
                </div>
              </div>
            ))}
          </>
        }
        <div className="grid grid-cols-8 mt-5">
          <div className=" col-span-5">
            <h3 className=" font-gotham text-sm font-medium">Notes:</h3>
            <p className="font-gotham text-sm font-normal">
              1.Please check the product carefully before payment.
            </p>
            <p className="font-gotham text-sm font-normal">
              2.After payment there will be no option for refund & exchange.
            </p>
            <p className="font-gotham text-sm font-normal">
              3.No claim will be accepted after receiving the product.
            </p>
          </div>
          <div className=" col-span-3">
            <div className=" font-gotham text-sm font-semibold">
              <div className="grid grid-cols-2">
                <p className=" font-gotham text-sm font-semibold">
                  Regular Price
                </p>
                <p className=" font-gotham text-sm font-semibold">
                  ৳ {amountBeforeCoupon}{" "}
                </p>
                <p className=" font-gotham text-sm font-semibold">Delivery</p>
                <p className=" font-gotham text-sm font-semibold">
                  ৳ {shipingCost}
                </p>
                <p className=" font-gotham text-sm font-semibold">Discount</p>
                <p className=" font-gotham text-sm font-semibold">
                  ৳ {amountBeforeCoupon - finalPrice}
                </p>
                <p className=" font-gotham text-sm font-semibold">Total</p>
                <p className=" font-gotham text-sm font-semibold">
                  ৳ {finalPrice + shipingCost}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Invoice;
