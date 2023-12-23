'use client';
import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { API_URL } from '@/constant';
import { RxCross2 } from 'react-icons/rx';

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
          className="  text-white bg-black inline-block p-2 mr-3 mt-3 cursor-pointer"
          onClick={handleEmi}
        >
          <RxCross2 />
        </div>
      </div>
      <div className="main-wrapper">
        <div className="grid w-full grid-cols-7">
          <div className="md:col-span-2 col-span-7  md:h-[400px]  h-[150px] overflow-y-scroll">
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
          <div className="md:col-span-5 col-span-7">
            {emi ? (
              <div className=" overflow-x-scroll md:overflow-x-visible">
                <table className="w-full text-sm text-left ">
                  <thead className=" bg-secondary">
                    <tr className="table-heading">
                      <th
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        Emi Months
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
                        {emiData.three_months}%
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
                        {Math.round(
                          price + (emiData.three_months * price) / 100
                        )}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(
                          (price + (emiData.three_months * price) / 100) / 3
                        )}
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
                        {Math.round(price + (emiData.six_months * price) / 100)}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(
                          (price + (emiData.six_months * price) / 100) / 6
                        )}
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
                        {Math.round(
                          price + (emiData.nine_months * price) / 100
                        )}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(
                          (price + (emiData.nine_months * price) / 100) / 9
                        )}
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
                        {Math.round(
                          price + (emiData.thirty_months * price) / 100
                        )}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(
                          (price + (emiData.twelve_months * price) / 100) / 12
                        )}
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
                        {Math.round(
                          price + (emiData.eighteen_months * price) / 100
                        )}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(
                          (price + (emiData.eighteen_months * price) / 100) / 18
                        )}
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
                        {Math.round(
                          price + (emiData.twenty_four_months * price) / 100
                        )}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(
                          (price + (emiData.twenty_four_months * price) / 100) /
                            24
                        )}
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
                        {Math.round(
                          price + (emiData.thirty_months * price) / 100
                        )}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(
                          (price + (emiData.thirty_months * price) / 100) / 30
                        )}
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
                        {Math.round(
                          price + (emiData.thirty_six_months * price) / 100
                        )}
                      </td>
                      <td
                        scope="col"
                        className="px-6 py-3 font-gotham font-medium"
                      >
                        {Math.ceil(
                          (price + (emiData.thirty_months * price) / 100) / 36
                        )}
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
