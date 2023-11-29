'use client';
import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { API_URL } from '@/constant';

type IProps = {
  handleEmi: () => void;
  price: number;
};

const EmiPopup: React.FC<IProps> = ({ handleEmi, price }) => {
  const [emi, setEmi] = useState<null | number | string>(null);
  const [emiData, setEmiData] = useState<IEmi>({} as IEmi);
  const [bankList, setBankList] = useState<IEmiResponse>({} as IEmiResponse);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await axios.get(`${API_URL}/emis/${emi}`);
        setEmiData(data.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [emi]);

  useEffect(() => {
    const fetchBank = async () => {
      try {
        const data = await axios.get(`${API_URL}/emis`);
        setBankList(data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchBank();
  }, []);
  return (
    <div className="emi-popup">
      <div className="text-right">
        <div
          className="  text-white bg-black inline-block p-2 mr-3 mt-3"
          onClick={handleEmi}
        >
          X
        </div>
      </div>
      <div className="main-wrapper">
        <div className="grid w-full grid-cols-7">
          <div className="col-span-2 h-[400px] overflow-y-scroll">
            <ul>
              <li
                onClick={() => setEmi(null)}
                className=" font-gotham text-sm p-2 cursor-pointer"
              >
                Select Bank
              </li>
              {bankList?.data?.rows?.map((bank, index) => (
                <li
                  onClick={() => setEmi(bank.id)}
                  key={index}
                  className={`font-gotham text-sm p-2 cursor-pointer ${
                    bank.id == emi ? ' bg-primary text-white' : ''
                  }`}
                >
                  {bank.bank_name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-5">
            {emi ? (
              <div>
                <table className="w-full text-sm text-left ">
                  <thead className=" bg-secondary">
                    <tr className="table-heading">
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Month
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        EMI Charge(%)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Product Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Effective Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Monthly Payable
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        3M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {emiData.thirty_months}%
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {price}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        3M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(price / 3)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        6M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {emiData.six_months}%
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {price}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        3M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(price / 6)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        9M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {emiData.nine_months}%
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {price}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        3M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(price / 9)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        12M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {emiData.nine_months}%
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {price}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        3M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(price / 12)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        18M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {emiData.eighteen_months}%
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {price}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        3M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(price / 18)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        24M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {emiData.twenty_four_months}%
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {price}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        3M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(price / 24)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        30M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {emiData.thirty_months}%
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {price}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        3M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(price / 30)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        36M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {emiData.thirty_six_months}%
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {price}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        3M
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(price / 36)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div>Please select Bank</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiPopup;
