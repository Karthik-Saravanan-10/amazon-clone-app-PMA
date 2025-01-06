import Link from "next/link";

const SuccessPlace = () => {
  return (
    <div className="flex flex-col gap-14 bg-white text-black rounded-xl boxShadow  w-96 h-80 ">
      <div className="bg-[#4f46e5] h-40 pl-40 rounded-t-xl">
        <div className="flex justify-end p-2">
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className=" rounded-full border-4 border-white w-24 h-24 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-20"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-center text-2xl">Successfully Placed</h2>
        <div className="text-center">
          <Link href={"/"}>
            <button className=" bg-green-500 text-white rounded px-2 text-lg">
              Close
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPlace;
