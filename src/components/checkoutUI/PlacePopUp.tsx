import { useState } from "react";
import { AddressContainer } from "../lists/informations";

const DeliverPlace = ({ func }: { func: any }) => {
  const [address, setAddress] = useState("");
  function ClickHandler() {
    AddressContainer.unshift(address);
    func();
    console.log(AddressContainer, address);
  }
  return (
    <div className="flex flex-col gap-2 bg-white text-black p-10 boxShadow w-fit">
      <label htmlFor="address">Address</label>
      <textarea
        onChange={(e) => setAddress(e.target.value)}
        required
        className="border-2 rounded w-96 h-52 resize-none p-3"
      ></textarea>
      <button onClick={ClickHandler}>Click</button>
    </div>
  );
};

export default DeliverPlace;
