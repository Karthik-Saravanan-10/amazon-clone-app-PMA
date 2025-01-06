const EmiDiv = () => {
  return (
    <>
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
    </>
  );
};

export default EmiDiv;
