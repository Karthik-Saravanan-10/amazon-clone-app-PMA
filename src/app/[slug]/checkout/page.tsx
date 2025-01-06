"use client";
import CheckoutHead from "@/components/checkoutUI/CheckoutHead";
import Payment from "@/components/checkoutUI/Payment";
import ProductBill from "@/components/checkoutUI/ProductBill";
import ProductRevise from "@/components/checkoutUI/ProductRevise";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ResponseData } from "@/components/HomepageUI/Cards";
import Loading from "@/components/Loading";
import DeliverPlace from "@/components/checkoutUI/PlacePopUp";
import { AddressContainer } from "@/components/lists/informations";

const Checkout = () => {
  const params = useParams();
  const id: { slug: string } = JSON.parse(JSON.stringify(params));
  let [productID, productCount] = id.slug.split("-");
  const [value, setValue] = useState<ResponseData>();
  const [ismount, setMount] = useState(false);
  const [isPop, setPopUp] = useState(false);
  useEffect(() => {
    let getData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
      const responeData: ResponseData = await res.json();
      setValue(responeData);
      setMount(true);
    };

    getData();
  }, []);

  function popedUp() {
    setPopUp((prev) => !prev);
  }

  if (!ismount) {
    return <Loading />;
  }

  if (isNaN(Number(productCount))) {
    productCount = "1";
  }

  return (
    <div>
      <div className="bg-[#F8F8F8] z-0">
        <CheckoutHead />
        <div className="flex mx-32 my-10 justify-around">
          <div className="w-3/5 flex flex-col gap-5">
            <div className="flex bg-white h-fit justify-between p-6">
              <div>
                <h3 className="font-semibold text-lg">
                  Delivering to {AddressContainer[0]?.name || "Greeta"}
                </h3>
                <p>
                  {AddressContainer[0]?.address ||
                    "Plot no.27,SV Castle,S2,2nd floor, Raja nagar,s.kolathur,Kovilambakkam, CHENNAI, TAMIL NADU, 600117, India"}
                </p>
                <p className="text-cyan-700 hover:underline cursor-pointer">
                  Add delivery instructions
                </p>
              </div>
              <div>
                <button
                  className="text-cyan-700 hover:underline"
                  onClick={popedUp}
                >
                  Change
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-white h-fit gap-2 p-6">
              <h3 className="font-semibold text-lg">Payment Method</h3>
              <Payment />
            </div>

            <div className="bg-white gap-2 p-6 h-fit">
              <ProductRevise value={value} />
            </div>
          </div>

          <div className="bg-white p-5 h-fit">
            <ProductBill rate={value?.price} count={productCount} />
          </div>
        </div>
      </div>
      {isPop ? (
        <div className="absolute top-0 bottom-0 w-full h-[175%] z-99 bg-[rgba(0,0,0,0.4)]">
          <div className="flex justify-center mt-40 fixed ml-[550px]">
            <DeliverPlace func={popedUp} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkout;
