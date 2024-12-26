import HeaderPage from "@/components/HeaderPage";
import { homePageSideNavCategory } from "@/components/lists/informations";
import Starcount from "@/components/Starcount";
//import masterArray from "@/store/store";

export default async function Dashboard({ params }: any) {
  const parameter = await params;
  const res = await fetch("https://fakestoreapi.com/products");
  const responeData = await res.json();
  //const fetchData = responeData.products;
  const fetchSingleData = responeData.filter((elem: any) => {
    return parameter.slug == elem.id;
  });
  return (
    <>
      <header>
        <HeaderPage />
        <div className="flex gap-8 text-[#333]  text-sm shadow-md p-3 pl-5">
          <p className="font-bold">Electronics</p>
          {homePageSideNavCategory.slice(2, 11).map((p) => {
            return <p>{p}</p>;
          })}
        </div>
      </header>
      <main>
        <p className="text-xs tracking-wide mt-2">
          Electronics›Mobiles & Accessories›Smartphones & Basic
          Mobiles›Smartphones
        </p>

        <div className="flex gap-28">
          <div className="ml-10 mt-14">
            <div className="float-right">
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
            <div>
              <img
                src={fetchSingleData[0]?.image}
                className="h-[700px]"
                alt=""
              />
            </div>
          </div>

          <div className="w-96 mt-10 ">
            <h1 className="text-4xl">
              {fetchSingleData[0]?.title + fetchSingleData[0]?.category}
            </h1>
            <p className="text-cyan-700">
              Visit the {fetchSingleData[0]?.category} Store
            </p>

            <div className="flex gap-2 items-center border-b-2 pb-1 text-sm text-cyan-700">
              <p className="text-black font-medium">
                {fetchSingleData[0]?.rating.rate}
              </p>
              <div className="flex">
                {Array(Math.round(fetchSingleData[0]?.rating.rate))
                  .fill(<Starcount />)
                  .map((_, i) => (
                    <Starcount />
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
              <p className="">{fetchSingleData[0]?.rating?.count}</p>
              <p className="">|</p>
              <p className="">Search this Page</p>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-2">
                <p className="text-red-500 font-thin text-2xl">-17%</p>
                <p className="text-3xl">
                  <sup className="text-sm">₹</sup>
                  {Math.round(
                    fetchSingleData[0]?.price * 100 -
                      fetchSingleData[0]?.price * 100 * 0.17
                  )}
                </p>
              </div>
              <p className="text-[#565959] text-xs font-semibold tracking-wide">
                M.R.P.:<del>{fetchSingleData[0]?.price * 100}</del>
              </p>
            </div>

            <div className="mt-3 mb-1 text-sm font-medium tracking-wide">
              <div className="bg-[#3e4650] w-fit px-1 border-triangle">
                <img src="./src/components/amazon-logo.png" alt="" />
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
              <input type="checkbox" />
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

            <div></div>
          </div>
        </div>
      </main>
      <p>{parameter.slug}</p>
    </>
  );
}
