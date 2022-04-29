import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardapio } from "../../cardapio";

interface Item {
    item: string,
    tamanho: string,
    preco: number,
    id: number,
    categoria: string
};

export const productSlice = createSlice({
    name: 'products',
    initialState: cardapio as Item[],
    reducers: {
        addProduct: (state, action: PayloadAction<Item>) => {
            return [...state, action.payload ]
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state = state.filter(({ id }) => id !== action.payload)
        },
        setProducts: (state, action: PayloadAction<Item[]>) => {
            state = action.payload
        }
    } 
});


export const selectProducts = (state: { products: Item[]; }) => state.products;

export default productSlice.reducer;