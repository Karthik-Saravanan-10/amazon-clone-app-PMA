const Title = ({ func }: { func: any }) => {
  return (
    <>
      <div className="absolute  w-96 text-sm top-16 left-[40%] text-black bg-white p-3  rounded border-[1px]">
        <div className="flex gap-1 title-triangle">
          <div>
            <p>
              We secure your payment and personal information when you share or
              save it with us. We don't share payment details with third-party
              sellers. We don't sell your information to others.{" "}
              <span className="text-cyan-700 hover:underline cursor-pointer">
                Learn more
              </span>
            </p>
          </div>
          <div>
            <a className="cursor-pointer" onClick={func}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
