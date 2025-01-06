"use client";
import FetchData from "@/components/HomepageUI/FetchData";
import FilterRequirements from "@/components/DashboardUI/FilterRequirements";
import HeaderPage from "@/components/HomepageUI/HeaderPage";
import { homePageSideNavCategory } from "@/components/lists/informations";
import Services from "@/components/DashboardUI/Services";
import Starcount from "@/components/HomepageUI/Starcount";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ResponseData } from "@/components/HomepageUI/Cards";
import Loading from "@/components/Loading";
import { ArrivingDateDash } from "@/components/lists/Date";

export default function Dashboard({ params }: any) {
  const [fetchSingleData, setfetchSingleData] = useState<ResponseData>();
  const [isMount, setMount] = useState(false);
  useEffect(() => {
    async function getData() {
      const parameter = await params;
      const res = await fetch(
        `https://fakestoreapi.com/products/${parameter.slug}`
      );
      setfetchSingleData(await res.json());
      setMount(true);
    }
    getData();
  }, []);

  if (!isMount || !fetchSingleData?.id) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <HeaderPage />
        <div className="flex gap-8 text-[#333]  text-sm shadow-md p-3 pl-5">
          <p className="font-bold">Electronics</p>
          {homePageSideNavCategory.slice(2, 11).map((p) => {
            return <p key={p}>{p}</p>;
          })}
        </div>
      </header>

      <main className="mb-10">
        <p className="text-xs tracking-wide mt-2">
          Electronics›Mobiles & Accessories›Smartphones & Basic Mobiles›
          {fetchSingleData?.category}
        </p>

        <div className="flex justify-around">
          <div className="flex mt-10 gap-8">
            <div className="ml-2 mt-10 ">
              {Array(Math.round(fetchSingleData?.rating?.rate))
                .fill(fetchSingleData.image)
                .map((elem, index) => {
                  return (
                    <div className="p-3 rounded-xl border-2 mt-5" key={index}>
                      <img src={elem} alt="" height={25} width={25} />
                    </div>
                  );
                })}
            </div>
            <div>
              <div className="float-right mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                  />
                </svg>
              </div>
              <div className="sticky top-0">
                <img
                  src={fetchSingleData?.image}
                  className="h-[700px] w-[520px]"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-96 mt-8 ">
            <h1 className="text-4xl">
              {fetchSingleData?.title + fetchSingleData?.category}
            </h1>
            <p className="text-cyan-700">
              {`Visit the ${fetchSingleData?.category} Store`}
            </p>

            <div className="flex gap-2 items-center border-b-2 pb-1 text-sm text-cyan-700">
              <p className="text-black font-medium">
                {fetchSingleData?.rating.rate}
              </p>
              <div className="flex">
                {Array(Math.round(fetchSingleData?.rating?.rate))
                  .fill(<Starcount />)
                  .map((_, i) => (
                    <Starcount key={i}/>
                  ))}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="">{fetchSingleData?.rating?.count}</p>
              <p className="">|</p>
              <p className="">Search this Page</p>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-2">
                <p className="text-red-500 font-thin text-2xl">-17%</p>
                <p className="text-3xl">
                  <sup className="text-sm">₹</sup>
                  {Math.round(
                    fetchSingleData?.price * 10 -
                      fetchSingleData?.price * 10 * 0.17
                  )}
                </p>
              </div>
              <p className="text-[#565959] text-xs font-semibold tracking-wide">
                M.R.P.:<del>{Math.round(fetchSingleData?.price * 10)}</del>
              </p>
            </div>

            <div className="mt-3 mb-1 text-sm font-medium tracking-wide">
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
              <p>Inclusive of all taxes</p>
              <div className="flex items-center">
                <p>
                  <b>EMI</b> starts at ₹412. No Cost EMI available.
                </p>
                <a className="text-cyan-900">EMI options</a>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex gap-2 text-sm items-center border-b-2 pb-3">
              <p className="bg-[#ff9900] font-bold px-1 rounded-l border-tri-orange">
                Coupon:
              </p>
              <div>
                <input type="checkbox" id="checkbox-1" />
              </div>
              <p>Apply ₹1000 coupon </p>
              <a className="underline text-cyan-900">Terms</a>
              <p>|</p>
              <div className="flex items-center">
                <a className="underline text-cyan-900">Shop items</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="border-b-2 py-2 pb-5">
              <div className="flex gap-4 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <p className="font-bold text-sm">Offers</p>
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col gap-1 shadow-3xl text-sm p-2 w-40">
                  <h3 className="font-bold">No Cost EMI</h3>
                  <p className="tracking-wide">
                    Upto ₹382.67 EMI interest savings on Amazon Pay ICICI…
                  </p>
                  <div className="flex items-center">
                    <a className="text-cyan-900">2 Offers</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-1 shadow-3xl text-sm p-2 w-40">
                  <h3 className="font-bold">Partner Offers</h3>
                  <p className="tracking-wide">
                    Get GST invoice and save up to 28% on business purchases.
                  </p>
                  <div className="flex items-center">
                    <a className="text-cyan-900 font-medium">1 offer</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* icons div */}

            <div>
              <Services />
            </div>

            <div className="mt-2">
              <FilterRequirements category={fetchSingleData?.category} />
            </div>

            <div className="flex flex-col mt-5">
              <h1 className="font-bold text-xl">About</h1>
              <ul className="ml-5">
                {fetchSingleData?.description.split(",").map((elem: string,i) => {
                  return (
                    <li
                      className="list-disc"
                      key={i}
                    >
                      {elem}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="border-2 mt-12 py-2 pr-5 pl-5 w-[250px] rounded-lg h-fit">
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
          </div>
        </div>
      </main>
    </>
  );
}
