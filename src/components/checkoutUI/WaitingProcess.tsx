const WaitingProcess = () => {
  return (
    <div className="absolute top-20">
      <div className="flex flex-col gap-14 bg-white text-black rounded-xl boxShadow  w-96 h-80 border-2">
        <div className="bg-[#4f46e5] h-40 pl-40 rounded-t-xl pt-9">
          <div className=" rounded-full border-4 border-white w-24 h-24 animate-spin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-20 m-1"
            >
              <path
                fillRule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-center text-2xl animate-pulse">Loading...</h2>
        </div>
      </div>
    </div>
  );
};

export default WaitingProcess;
