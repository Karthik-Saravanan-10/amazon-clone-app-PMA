"use client";

import { createRef, useEffect, useId } from "react";
import FetchData from "@/components/FetchData";

const Card = () => {
  const innerContainerRef = createRef<HTMLDivElement | null>();
  const outerContainerRef = createRef<HTMLDivElement | null>();

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
    const innerContainer = innerContainerRef.current;
    const outerContainer = outerContainerRef.current;
    if (!outerContainer || !innerContainer) return;

    const observer = new ResizeObserver(() => {});
    observer.observe(innerContainer);
    observer.observe(outerContainer);
    console.log("clicked");

    return () => observer.disconnect();
  }, [innerContainerRef.current, outerContainerRef.current]);

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
          <FetchData />
        </div>
      </div>
      <div className="p-2 rounded-lg border-2 border-gray-300">
        <button onClick={scrollRight}>{">"}</button>
      </div>
    </div>
  );
};

export default Card;
