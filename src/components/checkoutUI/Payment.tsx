const Payment = () => {
  return (
    <div className="border-2 ml-3 p-4">
      <h3 className="font-semibold text-lg border-b-2 pb-1">
        Your available balance
      </h3>
      <div className="flex gap-3 items-baseline p-2 mb-4">
        <input type="radio" name="" id="checkBox" />
        <label htmlFor="checkBox" className="w-72">
          <p className="font-semibold text-sm mb-1">
            Amazon Pay Balance ₹ 0.00 Unavailable
          </p>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-cyan-700"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs">
              Insufficient Balance.
              <span className="text-sm text-cyan-700">
                Add money & get rewarded
              </span>
            </p>
          </div>
        </label>
      </div>
      <div className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="grey"
          className="size-6 opacity-40"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          className="border-2 rounded  border-[#888c8c] pl-2"
          placeholder="Enter Code"
        />
        <button className="border-2 rounded-2xl  border-[#888c8c] text-sm px-3">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Payment;
