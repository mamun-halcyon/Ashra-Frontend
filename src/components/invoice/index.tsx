import Image from 'next/image';
import './index.scss';

const Invoice = () => {
  return (
    <div className="invoice">
      <div className="invoice-header">
        <div className="title">
          <Image
            className="w-auto"
            src={'/assets/images/logo/Logo.png'}
            width={60}
            height={60}
            alt="logo"
          />
          <h5></h5>
        </div>
        <div className="details">
          <div>
            <p>Gazi Home Apppance</p>
            <p>
              37/2, Pritom Zaman Tower, Bir Protik Gazi Dastagir Road, Dhaka
              1000
            </p>
            <p>Email: info@gazihomeapppance.com</p>
            <p>Phone: +8801766688840 </p>
          </div>
          <div className="order-details">
            <p>Bill to:</p>
            <p>Iftakher</p>
            <p>
              House: 12, Road: 01, Block I. Basundhara R/A, Dhaka, Bangladesh{' '}
            </p>
            <p>Email: iftebmw@gmail.com</p>
            <p>Phone: 01976100280</p>
            <p className="mt-5">Order ID: 20230810-11135133</p>
            <p>Order date: 10-08-2023</p>
          </div>
        </div>
      </div>

      {/*   <div className="invoice-body">
        <p>Bill to:</p>
        <p>Iftakher</p>
        <p> House: 12, Road: 01, Block I. Basundhara R/A, Dhaka, Bangladesh </p>
        <p>Email: iftebmw@gmail.com</p>
        <p>Phone: 01976100280</p>
      </div> */}

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Product Name </th>
            <th>Depvery Type</th>
            <th>Qty</th>
            <th>Unit price</th>
            <th>tax</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GA-BGS-30 - Gazi Smiss Gas Stove (LPG)</td>
            <td>Depvered</td>
            <td>1</td>
            <td>৳13,500.00</td>
            <td>৳0.00</td>
            <td>৳13,500.00</td>
          </tr>
        </tbody>
      </table>

      <div className="summery">
        <div className="item">
          <p>Sub Total</p>
          <p>৳13,500.00</p>
          <p>Shipping cost</p>
          <p>৳00.00</p>
          <p>Total Tax</p>
          <p>৳00.00</p>
          <p>Coupon Discount</p>
          <p>৳00.00</p>
          <p>Grand Total</p>
          <p>৳13,500.00</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
