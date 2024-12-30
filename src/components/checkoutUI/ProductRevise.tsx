"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ResponseData } from "../HomePageUI/Cards";

const ProductRevise = () => {
  const params = useParams();
  const id = JSON.parse(JSON.stringify(params));
  const [value, setValue] = useState<ResponseData>();
  const [ismount, setMount] = useState(false);

  useEffect(() => {
    let getData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id.slug}`);
      const responeData: ResponseData = await res.json();
      setValue(responeData);
      setMount(true);
    };

    getData();
  }, []);

  if (!ismount) {
    return <p>Loading..</p>;
  }
  return (
    <div className="flex justify-between text-base">
      <div className="w-3/4 flex flex-col gap-3">
        <div>
          <h1 className="text-lg font-semibold">Arriving date</h1>
          <p>
            We're sorry. Today's deadline for guaranteed accelerated delivery
            has expired. Please reselect your shipping speed to see updated
            shipping information.<span className="text-cyan-700">Details</span>
          </p>
        </div>
        <div className="flex gap-2 h-[65px] overflow-hidden">
          <img src={value?.image} alt="" width={50}/>
          <p>{value?.category}||{value?.description}</p>
        </div>
      </div>

      <div>
        <p className="text-cyan-700">Review Order</p>
      </div>
    </div>
  );
};

export default ProductRevise;
