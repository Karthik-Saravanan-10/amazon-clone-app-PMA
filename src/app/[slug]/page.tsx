"use client";
import FilterRequirements from "@/components/DashboardUI/FilterRequirements";
import HeaderPage from "@/components/HomepageUI/HeaderPage";
import { homePageSideNavCategory } from "@/components/lists/informations";
import Services from "@/components/DashboardUI/Services";
import Starcount from "@/components/HomepageUI/Starcount";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { ResponseData } from "@/components/lists/Interface";
import ProductCart from "@/components/DashboardUI/ProductCart";
import OffersDiv from "@/components/DashboardUI/OffersDiv";
import CouponsDiv from "@/components/DashboardUI/CouponsDiv";
import EmiDiv from "@/components/DashboardUI/EMIDiv";

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
          {/* {center div start} */}
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
                    <Starcount key={i} />
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

            <div className="mt-2">
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
              <EmiDiv />
            </div>

            <div className="flex gap-2 text-sm items-center border-b-2 pb-3">
              <CouponsDiv />
            </div>

            <div className="border-b-2 py-2 pb-5">
              <OffersDiv />
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
                {fetchSingleData?.description
                  .split(",")
                  .map((elem: string, i) => {
                    return (
                      <li className="list-disc" key={i}>
                        {elem}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          {/* {center div end} */}

          <div className="border-2 mt-12 py-2 pr-5 pl-5 w-[250px] rounded-lg h-fit">
            <ProductCart fetchSingleData={fetchSingleData} />
          </div>
        </div>
      </main>
    </>
  );
}
