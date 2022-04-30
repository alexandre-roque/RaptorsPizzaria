// Redux: https://youtu.be/3KUVksNAAxo?t=378

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface Item {
    item: string,
    tamanho: string,
    preco: number,
    id: number,
    categoria: string
};

export interface ItemCart extends Item {
    amount: number;
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as ItemCart[],
    reducers: {
        addItemToCart: (state, action: PayloadAction<Item>) => {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if(itemIndex !== -1){
                state[itemIndex].amount += 1;
            }
            else {
                state.push({...action.payload, amount: 1});
            }
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            const itemIndex = state.findIndex(item => item.id === action.payload);
            if(state[itemIndex].amount > 1){
                state[itemIndex].amount -= 1;
            }
            else {
                return state.filter(item => item.id !== action.payload);
            }
        }
    }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export const totalAmout = (state: RootState) => state.cart.map(item => item.amount).reduce((acc, total) => acc+total, 0);

export default cartSlice.reducer;