import { useState } from "react";
import { AddressContainer } from "@/components/lists/informations";
import { addressType } from "../lists/Interface";

const DeliverPlace = ({ func }: { func: any }) => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  function ClickHandler() {
    const obj: addressType = { name: name, address: address };
    AddressContainer.unshift(obj);
    func();
    console.log(AddressContainer, address);
  }
  return (
    <div className="flex flex-col gap-2 bg-white text-black p-7 rounded-xl boxShadow w-fit">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="border-2 rounded p-3"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="address">Address</label>
      <textarea
        onChange={(e) => setAddress(e.target.value)}
        required
        className="border-2 rounded w-96 h-52 resize-none p-3"
      ></textarea>
      <button
        onClick={ClickHandler}
        className=" bg-red-500 text-white rounded py-1 text-lg"
      >
        Cancel
      </button>
      <button
        onClick={ClickHandler}
        className=" bg-green-500 text-white rounded py-1 text-lg"
      >
        Click
      </button>
    </div>
  );
};

export default DeliverPlace;
