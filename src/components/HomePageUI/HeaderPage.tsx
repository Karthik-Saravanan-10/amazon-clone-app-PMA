import Image from "next/image";
import amazonLogo from "@/components/images/amazon-logo.png";
import Link from "next/link";

export default function HeaderPage() {
  return (
    <>
      <div className="w-full">
        {/* 1st header */}
        <div className="topHeader  p-2 flex text-white bg-black gap-5">
          <Link href={"/"}>
            <div className="flex pr-2 items-start">
              <Image
                src={amazonLogo}
                alt="amzon logo"
                className="w-full h-12 bg-black"
              />
              <p className="mt-2">.in</p>
            </div>
          </Link>

          <div className="flex gap-1 items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mb-1"
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
            <div className="">
              <p className="text-xs text-neutral-200">
                <b>Delivery to Thanjai</b>
              </p>
              <p>
                <strong className="text-sm">Chennai 618624</strong>
              </p>
            </div>
          </div>

          <div className="inline-flex items-center ml-2 w-2/4">
            <div className="flex bg-zinc-700 p-[10px] rounded-s-lg items-center gap-2 text-sm box-border">
              <p>All</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search Amazon.in"
                className="pl-3 p-2 w-[645px]"
              />
            </div>

            <div className="pl-2 p-2 bg-orange-400 rounded-e-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>

          <div className="flex gap-7">
            <div className="flex items-center gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
                alt=""
                width={21}
                height={18}
              />
              <p>
                <strong>EN</strong>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <div>
              <p>Hello, Karthik</p>
              <p>
                <strong>Account & Lists</strong>
              </p>
            </div>
            <div>
              <p>Returns</p>
              <p>
                <strong>& Orders</strong>
              </p>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <p>Card</p>
            </div>
          </div>
        </div>

        {/* second header */}

        <div className="bg-[#232f3e] font-medium text-sm  text-white pl-3 p-2 flex gap-5 items-center">
          <div className="flex gap-2 mx-1  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <p>All</p>
          </div>

          <div className="flex gap-1  items-center">
            <p>Freash</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <p className="">Mx Player</p>
          <p className="">Sell</p>
          <p className="">Gift Cards</p>
          <p className="">Buy Again</p>
          <p className="">Baby</p>
          <div className="flex  items-center">
            <p>Browsing History</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <p className="">Subscribe& Save</p>
          <p className="">Gourment Foods</p>
          <p className="">Pet Suppiles</p>
          <p className="">Health,Household & Personal Care</p>
          <p className="">Toys & Games</p>
          <p className="">Mobiles</p>
          <p className="">Books</p>
        </div>
      </div>
    </>
  );
}
