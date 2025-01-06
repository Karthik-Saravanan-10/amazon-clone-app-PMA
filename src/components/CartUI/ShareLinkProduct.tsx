import { ShareURL } from "../lists/informations";

const ShareLink = ({func}:{func:any}) => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="bg-gray-300 flex justify-end p-4 rounded-t-2xl">
        <button onClick={func}>
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
        </button>
      </div>
      <div className="p-3">
        <p className="text-xl">Share this product with friends</p>
        <div className="flex gap-7 px-16 py-5">
          {ShareURL.map((elem) => {
            return (
              <div key={elem.webName} className="cursor-pointer">
                <img
                  src={elem.url}
                  alt=""
                  width={70}
                  height={70}
                  className="rounded-full border-2"
                />
                <p className="text-center">{elem.webName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShareLink;
