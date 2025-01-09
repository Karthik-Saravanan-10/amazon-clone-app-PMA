import Link from "next/link";
import { ArrivingDateDash } from "../lists/Date";
import { ResponseData } from "../lists/Interface";
import FetchData from "../HomepageUI/FetchData";

const ProductCart = ({
  fetchSingleData,
}: {
  fetchSingleData: ResponseData;
}) => {
  return (
    <>
      <p className="text-3xl mb-1">
        <sup className="text-sm">₹</sup>
        {Math.round(
          fetchSingleData?.price * 10 - fetchSingleData?.price * 10 * 0.17
        )}
      </p>
      <div className="flex items-center bg-[#3e4650] w-fit px-1 border-triangle tr-10 text-sm gap-1 ">
        <img
          src={
            "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
          }
          alt=""
          width={15}
          height={15}
        />
        <p className="text-white">Fulfilled</p>
      </div>
      <p className="tracking-wide">
        <span className="underline text-cyan-700">FREE delivery</span>{" "}
        <b>{ArrivingDateDash}</b> on your first order.
      </p>
      <a className="text-cyan-700 underline mt-2">Details</a>
      <div className="flex gap-2 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <p className="text-sm  text-cyan-700 ">
          Deliver to Geetha - Chennai 600117
        </p>
      </div>

      <div className="flex flex-col text-[13px] mt-2">
        <h2 className="text-xl text-green-600">In Stock</h2>
        <div className="flex gap-3">
          <p className="text-[#565959]">Payment</p>
          <p className="text-cyan-700 ">Secure Transaction</p>
        </div>
        <div className="flex gap-3">
          <p className="text-[#565959]">Ships from</p>
          <p>Amazon</p>
        </div>
        <div className="flex gap-3">
          <p className="text-[#565959] ">Sold by</p>
          <p className="text-cyan-700 ">Clicktech Retail Private Ltd</p>
        </div>
      </div>

      <div className="text-base mt-4">
        <p className="font-bold">Add a Protection Plan:</p>
        <div className="flex gap-2 items-baseline">
          <div>
            <input type="checkbox" id="checkbox-2" />
          </div>
          <p>
            <span className="text-cyan-600">Extended Warranty</span> for{" "}
            <span className="text-red-600">₹125.00</span>
          </p>
        </div>
        <div>
          <select
            className="w-44 border-2 rounded h-8 bg-[#d5d9d9] p-1 text-sm"
            id="selectBox-2"
          >
            <option value="">Quantity:1</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-3 text-sm">
        <Link
          href={`${fetchSingleData.id}/cart`}
          className="bg-yellow-300 rounded-xl py-1 text-center"
        >
          <button>Add to Cart</button>
        </Link>
        <Link
          href={`${fetchSingleData.id}/checkout`}
          className="bg-orange-500 rounded-xl py-1 text-center"
        >
          <button>Buy Now</button>
        </Link>
      </div>

      <div className="flex mt-3 gap-2 justify-center border-b-2">
        <div>
          <input type="checkbox" id="checkbox-3" />
        </div>
        <p>Add gift options</p>
      </div>

      <div className="flex justify-center">
        <select
          className="w-44 border-2 mt-2 rounded h-8 bg-transparent p-1 text-sm"
          id="selectBox-1"
        >
          <option value="">Add to Whitelist</option>
        </select>
      </div>
      <div className="mt-3 h-[340px] overflow-hidden">
        <FetchData value={[fetchSingleData]} />
      </div>
    </>
  );
};

export default ProductCart;
