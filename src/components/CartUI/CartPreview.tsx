import { useState } from "react";
import { ResponseData } from "../HomepageUI/Cards";
import { Share } from "@/components/lists/informations";
import Link from "next/link";

const CartPreview = ({ data }: { data: ResponseData | undefined }) => {
  const [count, setCount] = useState<number>(1);
  const originalRate: number = data?.price
    ? Number(Math.round(data?.price * 10 - data?.price * 1.7).toFixed(2))
    : 0;
  if (!data) {
    return <p>Empty Cart</p>;
  }
  return (
    <>
      <main className="p-7 flex gap-5">
        <div className="bg-white w-4/5 box-border p-5">
          <div className="border-b-2 flex  justify-between items-end pb-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl">Shopping Cart</h2>
              <a className="text-cyan-700 hover:underline">
                Deselect all items
              </a>
            </div>
            <div>
              <p>Price</p>
            </div>
          </div>

          {count ? (
            <div className="flex items-start gap-9 border-b-2 text-sm pt-5 pb-14">
              <div className="mt-24">
                <input type="checkbox" />
              </div>
              <div className="w-44 h-44">
                <img src={data?.image} alt="" />
              </div>

              <div className="w-3/5 flex flex-col gap-1">
                <h2 className="text-2xl">{data.title + data?.category}</h2>
                <p className="text-green-700">In Stock</p>
                <p className="text-xs">Eligible for FREE Shipping</p>
                <div className="flex items-center bg-[#3e4650] w-fit px-1 border-triangle gap-1">
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
                <div className="flex gap-2">
                  <input type="checkbox" id="getGift" />
                  <label htmlFor="getGift">
                    <p>
                      This will be a giftThis is a gift{" "}
                      <span className="text-cyan-700 hover:underline">
                        Learn more
                      </span>
                    </p>
                  </label>
                </div>
                <p>
                  Size: <span>M</span>
                </p>
                <p>
                  Colour: <span>Navy Blue</span>
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex gap-3 rounded-2xl border-[3px] px-1 border-yellow-400 ">
                    <button onClick={() => setCount((prev) => prev - 1)}>
                      {count == 1 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                    <p>{count}</p>
                    <button onClick={() => setCount((prev) => prev + 1)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div>
                    {Share?.map((p) => (
                      <a
                        key={p}
                        className="border-l-2 px-2 text-cyan-700 hover:underline"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1 items-end">
                <p className="bg-red-700 text-white px-1 rounded text-xs">
                  Limited time deal
                </p>
                <p className="font-bold text-base">₹{originalRate}</p>
                <div className="flex gap-1">
                  <p className="text-red-700 font-bold">-17%</p>
                  <p className="font-thin">
                    M.R.P.:₹<del>{Math.round(data?.price) * 10}</del>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="border-b-2 text-center">
              <span className="text-cyan-700 text-sm">
                {data.title + data?.category}
              </span>{" "}
              was removed from Shopping Cart.
            </p>
          )}

          <div className="flex gap-2 float-right text-xl">
            <p>Subtotal ({count} items):</p>
            <p className="font-bold">₹{originalRate * count}</p>
          </div>
        </div>

        <div className="bg-white w-1/5 h-fit p-5 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="bg-green-900 text-white rounded-xl h-4 w-52">.</div>
            <p>₹49</p>
          </div>
          <div className="text-xs flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-green-900">
                Your order is eligible for FREE Delivery.
              </p>
              <p className="text-xs">
                Choose{" "}
                <span className="text-cyan-700 hover:underline">
                  FREE Delivery
                </span>{" "}
                option at checkout.
              </p>
            </div>
          </div>
          <div className="flex gap-2 float-right text-xl">
            <p>Subtotal ({count} items):</p>
            <p className="font-bold">₹{originalRate * count}</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="gift" />
            <label htmlFor="gift">This order contains a gift</label>
          </div>
          <div className="bg-yellow-300 rounded-2xl p-1 text-center text-sm">
            <Link href={`/${data.id}-${count}/checkout`}>
              <button disabled={!count} className={`${!count?"cursor-not-allowed":""}`}>Proceed to Buy</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPreview;
