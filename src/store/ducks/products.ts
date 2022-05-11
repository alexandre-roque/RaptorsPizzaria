import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardapio } from "../../cardapio";
import { ItemProps } from "../../components/Item";

export const productSlice = createSlice({
    name: 'products',
    initialState: cardapio as ItemProps[],
    reducers: {
        addProduct: (state, action: PayloadAction<ItemProps>) => {
            return [...state, action.payload ]
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state = state.filter(({ id }) => id !== action.payload)
        },
        setProducts: (state, action: PayloadAction<ItemProps[]>) => {
            state = action.payload
        }
    } 
});


export const selectProducts = (state: { products: ItemProps[]; }) => state.products;

export default productSlice.reducer;