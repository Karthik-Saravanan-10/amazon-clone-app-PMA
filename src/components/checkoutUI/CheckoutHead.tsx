import Image from "next/image";
import amazonLogo from "@/components/images/amazon-logo.png";
import Link from "next/link";
import Title from "./TitlePopup";
import { useState } from "react";

const CheckoutHead = () => {
  const [popup, setPopup] = useState(false);
  function ClickHandler() {
    setPopup((prev) => !prev);
  }
  return (
    <div className="h-15 bg-black text-white p-3 flex justify-between">
      <Link href={"/"}>
        <div className="flex pr-2 items-start">
          <Image
            src={amazonLogo}
            alt="amazon logo"
            className="bg-black"
            width={100}
          />
          <p className="mt-2">.in</p>
        </div>
      </Link>

      <div className="flex gap-1 items-center">
        <h1 className="text-3xl">Secure Checkout</h1>
        <a className="cursor-pointer" onClick={ClickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 font-bold"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <p className="font-semibold">Cart</p>
      </div>
      {popup ? <Title func={ClickHandler} /> : ""}
    </div>
  );
};

export default CheckoutHead;
