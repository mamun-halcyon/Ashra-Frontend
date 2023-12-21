import Image from 'next/image';
import './index.scss';

const Invoice = ({ order }: any) => {
  return (
    <div className="invoice bg-white hidden">
      <div className="invoice-header">
        <div className="title">
          <Image
            className="w-full"
            src="/assets/images/invoice-header.png"
            alt="invoice"
            width={800}
            height={400}
          />
        </div>
        <h4 className="customer-details bg-white text-black">
          Customer Details
        </h4>
        <div className="details bg-secondary mr-2 p-1">
          <div className="left">
            <p>Name: {order.name}</p>
            <p>Email: {order.email}</p>
            <p>Phone: {order.mobile} </p>
            <p>Address: {order.address} </p>
          </div>
          <div className="order-details  bg-secondary p-1 right">
            <p>Order date: {order.created_at}</p>
            <p>Invoice No: GHA-{order.id}</p>
            <p>Order No: {order.id}</p>
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

      <div className="invoice-table">
        <div className="grid grid-cols-8">
          <div className=" col-span-1">SL. </div>
          <div className=" col-span-2">Description</div>
          <div className=" col-span-1">Attribute</div>
          <div className=" col-span-1">Qty</div>
          <div className=" col-span-2">Unit price (BDT)</div>
          <div className=" col-span-1">Total</div>
        </div>
        {
          <>
            {order?.orderItems?.map((product: any, index: any) => (
              <div className="grid grid-cols-8" key={index}>
                <div className=" col-span-1">{index}</div>
                <div className=" col-span-2">{product.product_name}</div>
                <div className=" col-span-1">-</div>
                <div className=" col-span-1">{product.quantity}</div>
                <div className=" col-span-2">{product.discount_price}</div>
                <div className="col-span-1">
                  ৳ {product.discount_price * product.quantity}
                </div>
              </div>
            ))}
          </>
        }
        <div className="grid grid-cols-8">
          <div className=" col-span-5">
            <h3>Notes:</h3>
            <p>1.Please check the product carefully before payment.</p>
            <p>
              2.After payment there will be no option for refund & exchange.
            </p>
            <p>3.No claim will be accepted after receiving the product.</p>
          </div>
          <div className=" col-span-3">
            <div className="summery">
              <div className="">
                <p className=" sort-summery">Sub Total</p>
                <p className=" sort-summery"></p>
                <p className=" sort-summery">Shipping cost</p>
                <p className=" sort-summery">৳00.00</p>
                <p className=" sort-summery">Coupon Discount</p>
                <p className=" sort-summery">৳00.00</p>
                <p className=" sort-summery">Grand Total</p>
                <p className=" sort-summery">{`৳${order?.orderItems?.reduce(
                  (sum: any, item: any) => {
                    // Check if discount_price is null or 0
                    if (
                      item.discount_price === null ||
                      item.discount_price === 0
                    ) {
                      // Add regular_price * quantity to the sum
                      sum += item.regular_price * item.quantity;
                    } else {
                      // Add discount_price * quantity to the sum
                      sum += item.discount_price * item.quantity;
                    }
                    return sum;
                  },
                  0
                )}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
