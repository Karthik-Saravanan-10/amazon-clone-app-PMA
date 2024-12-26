import Starcount from "@/components/Starcount";
import masterArray  from "@/store/store";
import Link from "next/link";
import { useId } from "react";

const FetchData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const responeData = await res.json();
  //const fetchData = responeData.products;
  return (
    <>
      {responeData?.map((elem: any) => {
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
                    <Starcount />
                  ))}
              </div>
              <p>{" " + elem.rating.count}</p>
            </div>
            <div className="text-[#b12704] text-sm mt-1 hover:text-red-600">
              <Link href={`${elem.id}`}>{"₹" + elem.price} </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FetchData;
