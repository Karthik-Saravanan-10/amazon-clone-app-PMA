"use client";
import { ResponseData } from "@/components/HomepageUI/Cards";
import { addProduct } from "@/store/Slice/InitialSlice";
import store, { useAppDispatch } from "@/store/store";
import { useEffect } from "react";
import { Provider } from "react-redux";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
