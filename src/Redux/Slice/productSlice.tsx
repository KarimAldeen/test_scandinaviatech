
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ProductState {
    value: any
}

const initialState: ProductState = {
    value: {
        data: [],
        
    },
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductData: (state:any, action: PayloadAction<any>) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
})

export const { setProductData } = ProductSlice.actions

export default ProductSlice.reducer