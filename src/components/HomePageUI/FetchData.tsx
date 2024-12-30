"use client";
import Starcount from "@/components/HomePageUI/Starcount";
import Link from "next/link";


const FetchData = ({value}:any) => {
  return (
    <>
      {value?.map((elem: any) => {
        return (
          <div className="min-w-56 max-w-56" key={elem.id}>
            <p className="bg-orange-500 w-fit px-2 text-white mb-4">
              {"# " + elem.id}
            </p>
            <div className="flex justify-center mb-5">
              <img src={elem.image} className="max-w-52 max-h-44" alt="" />
            </div>
            <div className="max-h-16 max-w-56 overflow-hidden">
              <h3 className="text-sm text-[#007185]">
                <Link href={`${elem.id}`}>{elem.title + elem.description}</Link>
              </h3>
            </div>
            <div className="flex gap-2 items-center text-sm text-[#007185] hover:text-green-600">
              <div className="flex">
                {Array(Math.round(elem.rating.rate))
                  .fill(<Starcount />)
                  .map((_, i) => (
                    <div key={i}>
                      <Starcount />
                    </div>
                  ))}
              </div>
              <p>{" " + elem.rating.count}</p>
            </div>
            <div className="text-[#b12704] text-sm mt-1 hover:text-red-600">
              <Link href={`${elem.id}`}>{"₹" + (elem.price * 10).toFixed(2)} </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FetchData;
