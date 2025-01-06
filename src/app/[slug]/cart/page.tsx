"use client";
import CartPreview from "@/components/CartUI/CartPreview";
import HeaderPage from "@/components/HomepageUI/HeaderPage";
import { ResponseData } from "@/components/lists/Interface";
import Loading from "@/components/Loading";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Cart = () => {
  const { slug } = useParams();
  const [value, setValue] = useState<ResponseData>();
  const [ismount, setMount] = useState(false);
  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
      const fetchSingleData = await res.json();
      setValue(fetchSingleData);
      setMount(true);
    }

    getData();
  }, []);

  if (!ismount) {
    return <Loading/>
  }

  return (
    <div className="bg-[#EAEDED]">
      <HeaderPage />
      <CartPreview data={value} />
    </div>
  );
};

export default Cart;
  