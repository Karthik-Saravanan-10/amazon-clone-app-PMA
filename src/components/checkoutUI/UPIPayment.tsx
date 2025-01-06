import { useState } from "react";
import { UPIName } from "../lists/informations";
import SuccessPlace from "./SucessPopup";
import WaitingProcess from "./WaitingProcess";

const UPIPayment = () => {
  const [data, setData] = useState("");
  const [isPresent, SetPresent] = useState(false);
  const [isValid, setValid] = useState(true);
  const [loading, setLoading] = useState(true);
  function dataHandler() {
    const isPresent = UPIName.filter((elem) => elem == data);
    setData("");
    if (isPresent[0]) {
      SetPresent(true);
      setValid(true);
    } else {
      SetPresent(false);
      setValid(false);
    }
  }

  if (isPresent) {
    window.scroll({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      console.log("ok");
      setLoading(false);
    }, 3500);
  }

  const DataDiv = loading ? <WaitingProcess /> : <SuccessPlace />;
  return (
    <>
      <div className="flex flex-col gap-1 ">
        <p className="text-sm">Please enter your UPI ID</p>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter UPI ID"
            className="text-xs pl-2 w-56 rounded border-[1px] border-black"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
              setValid(true);
            }}
          />
          <div className="border-[#ffed94] border-[1px] text-xs px-2 py-1 rounded-3xl bg-[#fffae0]">
            <button onClick={dataHandler}>Verify</button>
          </div>
        </div>
        <p className="text-red-600 text-sm">
          {!isValid ? "Invalid Error" : ""}
        </p>
        <p className="text-sm w-[141%]">
          The UPI ID is in the format of name/phone number@bankname
        </p>
      </div>
      {isPresent ? (
        <div className="absolute top-0 pt-52 pl-[35%] bottom-[-750px] left-0 w-full bg-[rgba(0,0,0,0.4)]">
          {DataDiv}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UPIPayment;
