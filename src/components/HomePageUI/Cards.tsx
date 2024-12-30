"use client";

import { createRef, useEffect, useState } from "react";
import FetchData from "@/components/HomePageUI/FetchData";

export interface ResponseData {
  id: number;
  title: string;
  price: number;
  description: string | number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const Card = () => {
  const innerContainerRef = createRef<HTMLDivElement | null>();
  const outerContainerRef = createRef<HTMLDivElement | null>();
  const [value, setValue] = useState<ResponseData[]>();
  const [ismount, setMount] = useState(false);

  function scrollLeft() {
    console.log("left");
    outerContainerRef.current?.scrollBy(
      -outerContainerRef.current.clientWidth,
      0
    ); //1204
  }

  function scrollRight() {
    console.log("right");
    outerContainerRef.current?.scrollBy(
      outerContainerRef.current.clientWidth,
      0
    );
  }

  useEffect(() => {
    let getData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const responeData: ResponseData[] = await res.json();
      setValue(responeData);
      setMount(true);
    };

    getData();
  }, []);

  useEffect(() => {
    const innerContainer = innerContainerRef.current;
    const outerContainer = outerContainerRef.current;
    if (!outerContainer || !innerContainer) return;

    const observer = new ResizeObserver(() => {});
    observer.observe(innerContainer);
    observer.observe(outerContainer);
    console.log("clicked");

    setMount(true);

    return () => observer.disconnect();
  }, [innerContainerRef.current, outerContainerRef.current]);

  if (!ismount) {
    return (
      <div className="text-center mt-3">
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="p-2 rounded-lg border-2 border-gray-300">
        <button onClick={scrollLeft}>{"<"}</button>
      </div>
      <div
        className="max-width overflow-hidden"
        ref={outerContainerRef as React.RefObject<HTMLDivElement>}
      >
        <div
          className="flex gap-4 mt-5 "
          ref={innerContainerRef as React.RefObject<HTMLDivElement>}
        >
          <FetchData value={value} />
        </div>
      </div>
      <div className="p-2 rounded-lg border-2 border-gray-300">
        <button onClick={scrollRight}>{">"}</button>
      </div>
    </div>
  );
};

export default Card;
