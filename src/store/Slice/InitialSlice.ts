import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ResponseData } from "@/components/HomepageUI/Cards";

const initialState: ResponseData[] = [];

const initailSlice = createSlice({
    name: "initail",
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<ResponseData>) => {
            state.push(action.payload)
        }
    }
})

export const {addProducts } = initailSlice.actions
export default initailSlice.reducer