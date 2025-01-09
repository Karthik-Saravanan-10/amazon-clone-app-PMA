const CouponsDiv = () => {
  return (
    <>
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
    </>
  );
};

export default CouponsDiv;
