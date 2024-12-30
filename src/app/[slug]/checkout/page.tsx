"use client";
import CheckoutHead from "@/components/checkoutUI/CheckoutHead";
import Payment from "@/components/checkoutUI/Payment";
import ProductBill from "@/components/checkoutUI/ProductBill";
import ProductRevise from "@/components/checkoutUI/ProductRevise";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ResponseData } from "@/components/HomepageUI/Cards";

const Checkout = () => {
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
    <div className="bg-[#F8F8F8]">
      <CheckoutHead />
      <div className="flex mx-32 my-10 justify-around">
        <div className="w-3/5 flex flex-col gap-5">
          <div className="flex bg-white h-fit gap-2 p-6">
            <div>
              <h3 className="font-semibold text-lg">Delivering to Geetha</h3>
              <p>
                Plot no.27,SV Castle,S2,2nd floor, Raja nagar,s.kolathur,
                Kovilambakkam, CHENNAI, TAMIL NADU, 600117, India
              </p>
              <p className="text-cyan-700">Add delivery instructions</p>
            </div>
            <div>
              <p className="text-cyan-700">Change</p>
            </div>
          </div>
          <div className="flex flex-col bg-white h-fit gap-2 p-6">
            <h3 className="font-semibold text-lg">Payment Method</h3>
            <Payment />
            <div>
              <button className="bg-yellow-300 p-3 py-1 px-8 rounded-3xl text-sm">
                Use this payment method
              </button>
            </div>
          </div>

          <div className="bg-white gap-2 p-6 h-fit">
            <ProductRevise value={value}/>
          </div>
        </div>

        <div className="bg-white p-5 h-fit">
          <ProductBill rate={value?.price}/>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
