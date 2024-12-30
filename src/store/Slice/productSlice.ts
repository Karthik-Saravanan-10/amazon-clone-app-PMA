import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ResponseData } from "@/components/HomepageUI/Cards";

const initialState: ResponseData[] = [];

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ResponseData>) => {
            state.push(action.payload)
        }
    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer