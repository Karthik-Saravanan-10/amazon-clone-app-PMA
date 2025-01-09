import React, { useEffect, useState } from "react";
import UPIPayment from "./UPIPayment";
import SuccessPlace from "./SucessPopup";
import { radioBtn } from "../lists/informations";
import WaitingProcess from "./WaitingProcess";
import CardPayment from "./CardPayment";

const Payment = () => {
  const [radio, setRadio] = useState<string>("");
  const [payment, setPayment] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    console.log(radio);
    const check = radioBtn.filter((elem) => elem == radio);
    if (check[0]) {
      setPayment(true);
    } else {
      setPayment(false);
    }
  }, [radio]);

  if (clicked) {
    window.scroll({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      console.log("ok");
      setLoading(false);
    }, 3500);
  }

  const DataDiv: React.ReactNode = loading ? (
    <WaitingProcess />
  ) : (
    <SuccessPlace />
  );

  return (
    <>
      <div className="border-[1px] rounded-xl ml-3 p-4">
        <h3 className="font-semibold text-lg border-b-2 pb-1">
          Your available balance
        </h3>
        <div
          className={`flex gap-3 items-baseline p-3 mb-4 mt-2 ${
            radio == "Radio_1"
              ? "bg-[#FCF5EE] rounded border-[#fbd8b4] border-2"
              : ""
          }`}
        >
          <input
            type="radio"
            name="payment_Radio"
            id="Radio_1"
            onChange={(e) => setRadio(e.target.id)}
          />
          <label htmlFor="Radio_1" className="w-72">
            <p className="font-semibold text-sm mb-1">
              Amazon Pay Balance ₹ 0.00 Unavailable
            </p>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-cyan-700"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs">
                Insufficient Balance.
                <span className="text-sm text-cyan-700">
                  Add money & get rewarded
                </span>
              </p>
            </div>
          </label>
        </div>

        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="grey"
            className="size-6 opacity-40"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="border-[1px] rounded w-56  border-[#888c8c] p-1 text-sm"
            placeholder="Enter Code"
          />
          <button className="border-[1px] rounded-2xl  border-[#888c8c] text-sm px-3">
            Apply
          </button>
        </div>

        <div className="mt-5">
          <h3 className="font-semibold border-b-2">Another payment method</h3>

          <div
            className={`flex gap-3 items-baseline p-3 mb-4 mt-2 ${
              radio == "Radio_2"
                ? "border-[#fbd8b4] rounded border-2 bg-[#FCF5EE]"
                : ""
            }`}
          >
            <input
              type="radio"
              name="payment_Radio"
              id="Radio_2"
              onChange={(e) => setRadio(e.target.id)}
            />
            <label htmlFor="Radio_2" className="w-72">
              <p className="font-semibold text-sm mb-1">Credit or debit card</p>
              {radio == "Radio_2" ? <CardPayment /> : ""}
            </label>
          </div>

          <div
            className={`flex gap-3 items-baseline p-3 mb-4 ${
              radio == "Radio_3" ? "bg-[#FCF5EE] rounded" : ""
            }`}
          >
            <input
              type="radio"
              name="payment_Radio"
              id="Radio_3"
              onChange={(e) => setRadio(e.target.id)}
            />
            <label htmlFor="Radio_3" className="w-72">
              <p className="font-semibold text-sm mb-1">Net Banking</p>
              <div className="flex gap-1">
                <select
                  className="w-40 border-2 rounded h-8 bg-[#E3E6E6] p-1 text-sm"
                  id="selectBox-2"
                >
                  <option value="">Choose an Option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </label>
          </div>

          <div
            className={`flex gap-3 items-baseline p-3 mb-4 ${
              radio == "Radio_4"
                ? "border-[#fbd8b4] rounded border-2 bg-[#FCF5EE]"
                : ""
            }`}
          >
            <input
              type="radio"
              name="payment_Radio"
              id="Radio_4"
              onChange={(e) => setRadio(e.target.id)}
            />
            <label htmlFor="Radio_4" className="w-72">
              <p className="font-semibold text-sm mb-1">Other UPI Apps</p>
              {radio == "Radio_4" ? <UPIPayment /> : ""}
            </label>
          </div>

          <div
            className={`flex gap-3 items-baseline p-3 mb-4 ${
              radio == "Radio_5"
                ? "border-[#fbd8b4] rounded border-2 bg-[#FCF5EE]"
                : ""
            }`}
          >
            <input
              type="radio"
              name="payment_Radio"
              id="Radio_5"
              onChange={(e) => setRadio(e.target.id)}
            />
            <label htmlFor="Radio_5" className="w-72">
              <p className="font-semibold text-sm mb-1">EMI</p>
              {radio == "Radio_5" ? (
                <div className="flex gap-1">
                  <select
                    className="w-40 border-2 rounded h-8 bg-[#E3E6E6] p-1 text-sm"
                    id="selectBox-2"
                  >
                    <option value="">₹ 100/ month</option>
                  </select>
                </div>
              ) : (
                ""
              )}
            </label>
          </div>

          <div
            className={`flex gap-3 items-baseline p-3 mb-4 ${
              radio == "Radio_6"
                ? "border-[#fbd8b4] rounded border-2 bg-[#FCF5EE]"
                : ""
            }`}
          >
            <input
              type="radio"
              name="payment_Radio"
              id="Radio_6"
              onChange={(e) => setRadio(e.target.id)}
            />
            <label htmlFor="Radio_6">
              <p className="font-semibold text-sm mb-1">
                Cash on Delivery/Pay on Delivery
              </p>
              <div className="flex gap-1">
                <p className="text-green-600 text-sm">
                  Scan & Pay at delivery with Amazon Pay UPI and get cashback up
                  to ₹10.<span className="text-cyan-700">Know more.</span>
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="bg-yellow-300 p-3 py-1 px-8 rounded-3xl text-sm w-fit">
        <button
          onClick={() => setClicked(true)}
          disabled={!payment}
          className={`${!payment ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          Use this payment method
        </button>
      </div>
      {payment && clicked ? (
        <div className="absolute top-0 pt-52 pl-[35%] bottom-[-750px] left-0 w-full bg-[rgba(0,0,0,0.4)] scroll-0">
          {DataDiv}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Payment;
