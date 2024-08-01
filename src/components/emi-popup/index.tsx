"use client";
import React, { useEffect, useState, ChangeEvent } from "react";
import "./index.scss";
import axios from "axios";
import { API_URL } from "@/constant";
import { RxCross2 } from "react-icons/rx";
import FormGroup from "../fromgroup";
import { useDebounce } from "use-debounce";
import FormatPrice from "../price-formate";

type IProps = {
  handleEmi: () => void;
  price: number;
};

const EmiPopup: React.FC<IProps> = ({ handleEmi, price }) => {
  const [emi, setEmi] = useState<null | number | string>(null);
  const [emiData, setEmiData] = useState<IEmi>({} as IEmi);
  const [search, setSearch] = useState("");
  const [bankList, setBankList] = useState<IEmiResponse>({} as IEmiResponse);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await axios.get(`${API_URL}/emis/${emi}`);
        setEmiData(data.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [emi]);

  useEffect(() => {
    const fetchBank = async () => {
      try {
        const data = await axios.get(
          `${API_URL}/emis?limit=60&bank_name=${search}`
        );
        setBankList(data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchBank();
  }, [search]);

  return (
    <div className="emi-popup">
      <div className="main-wrapper flex-wrap">
        <div className="w-full ">
          <div className="w-full mb-5">
            <div className="emi-header flex justify-between">
              <div>
                <h3 className=" font-gotham font-medium text-sm">BANK EMI </h3>
              </div>
              <div
                className="  inline-block p-2  cursor-pointer"
                onClick={handleEmi}
              >
                <RxCross2 />
              </div>
            </div>
          </div>
          <p className=" font-gotham font-medium text-sm mb-2">Credit Card</p>
          <div className="grid w-full grid-cols-7 gap-4">
            <div className="md:col-span-2 col-span-7 h-auto overflow-y-scroll border border-color">
              <div className="px-1">
                <FormGroup placeholder="Search Bank" onChange={handleSearch} />
              </div>
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
                      bank.id == emi ? " primary-bg white-text" : ""
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
                  <table className="w-full text-sm text-left border-collapse">
                    <thead className=" secondary-bg">
                      <tr className="table-heading">
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium border border-color"
                        >
                          Emi Months
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium border border-color"
                        >
                          EMI Charge(%)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium border border-color"
                        >
                          Product Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium border border-color"
                        >
                          Effective Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 font-gotham font-medium border border-color"
                        >
                          Monthly Payable
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {emiData.three_months > 0 && (
                        <tr>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            3M
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {emiData.three_months}%
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(price)}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.round(
                                price + (emiData.three_months * price) / 100
                              )
                            )}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.ceil(
                                (price + (emiData.three_months * price) / 100) /
                                  3
                              )
                            )}
                          </td>
                        </tr>
                      )}
                      {emiData.six_months > 0 && (
                        <tr>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            6M
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {emiData.six_months}%
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(price)}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.round(
                                price + (emiData.six_months * price) / 100
                              )
                            )}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.ceil(
                                (price + (emiData.six_months * price) / 100) / 6
                              )
                            )}
                          </td>
                        </tr>
                      )}
                      {emiData.nine_months > 0 && (
                        <tr>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            9M
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {emiData.nine_months}%
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(price)}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.round(
                                price + (emiData.nine_months * price) / 100
                              )
                            )}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.ceil(
                                (price + (emiData.nine_months * price) / 100) /
                                  9
                              )
                            )}
                          </td>
                        </tr>
                      )}
                      {emiData.nine_months > 0 && (
                        <tr>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            12M
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {emiData.nine_months}%
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(price)}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.round(
                                price + (emiData.thirty_months * price) / 100
                              )
                            )}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.ceil(
                                (price +
                                  (emiData.twelve_months * price) / 100) /
                                  12
                              )
                            )}
                          </td>
                        </tr>
                      )}
                      {emiData.eighteen_months > 0 && (
                        <tr>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            18M
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {emiData.eighteen_months}%
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(price)}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.round(
                                price + (emiData.eighteen_months * price) / 100
                              )
                            )}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.ceil(
                                (price +
                                  (emiData.eighteen_months * price) / 100) /
                                  18
                              )
                            )}
                          </td>
                        </tr>
                      )}
                      {emiData.twenty_four_months > 0 && (
                        <tr>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            24M
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {emiData.twenty_four_months}%
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(price)}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.round(
                                price +
                                  (emiData.twenty_four_months * price) / 100
                              )
                            )}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.ceil(
                                (price +
                                  (emiData.twenty_four_months * price) / 100) /
                                  24
                              )
                            )}
                          </td>
                        </tr>
                      )}
                      {emiData.thirty_months > 0 && (
                        <tr>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            30M
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {emiData.thirty_months}%
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(price)}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.round(
                                price + (emiData.thirty_months * price) / 100
                              )
                            )}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.ceil(
                                (price +
                                  (emiData.thirty_months * price) / 100) /
                                  30
                              )
                            )}
                          </td>
                        </tr>
                      )}
                      {emiData.thirty_six_months > 0 && (
                        <tr>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            36M
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {emiData.thirty_six_months}%
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(price)}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.round(
                                price +
                                  (emiData.thirty_six_months * price) / 100
                              )
                            )}
                          </td>
                          <td
                            scope="col"
                            className="px-6 py-3 font-gotham font-medium border border-color"
                          >
                            {FormatPrice(
                              Math.ceil(
                                (price +
                                  (emiData.thirty_six_months * price) / 100) /
                                  36
                              )
                            )}
                          </td>
                        </tr>
                      )}
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
    </div>
  );
};

export default EmiPopup;
