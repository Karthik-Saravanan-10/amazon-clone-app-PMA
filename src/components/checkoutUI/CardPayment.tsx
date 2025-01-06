import { useState } from "react";
import { monthLarge } from "../lists/Date";

const CardPayment = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  function popupHandler() {
    setName("");
    setPopup((prev) => !prev);
  }

  function submitHandler() {
    setPopup((prev) => !prev);
  }
  return (
    <>
      {!name && (
        <button onClick={popupHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <p className="bg-white px-3 w-fit">{name}</p>
      {popup && (
        <div className="flex flex-col absolute bg-white font-bold text-sm shadow-2xl">
          <div className="flex justify-between p-5 bg-[#f0f2f2] border-b-2">
            <p>Save Card</p>
            <button onClick={popupHandler}>
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
          <div className="flex  p-5">
            <div className="flex flex-col mx-16 gap-3">
              <div className="flex justify-between">
                <label htmlFor="number">Card number</label>
                <input
                  type="number"
                  name="number"
                  className="border-2 h-7 w-48"
                />
              </div>
              <div className="flex gap-20 justify-between">
                <label htmlFor="name">Nick Name</label>
                <input
                  type="text"
                  name="name"
                  className="border-2 h-7 w-48"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="date">Expiry Date</label>
                <select name="date" id="" className="h-7 w-48 border-2">
                  {monthLarge.map((mon:string) => (
                    <option value={mon} key={mon}>
                      {mon}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mx-16 w-96">
              <p>
                Please ensure that you enable your card for online payments from
                your bank’s app.
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#f0f2f2] border-t-2 flex justify-end gap-5">
            <button
              className="rounded-3xl border-2 py-2 px-3 bg-white"
              onClick={popupHandler}
            >
              Cancel
            </button>
            <button
              className="rounded-3xl border-2 py-2 px-3 bg-yellow-300"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPayment;
