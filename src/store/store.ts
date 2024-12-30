import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slice/productSlice'
import initialSlice from './Slice/InitialSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        productSlice,
        initialSlice
    }
})

export default store
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector