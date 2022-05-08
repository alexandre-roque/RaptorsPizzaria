// Redux: https://youtu.be/3KUVksNAAxo?t=378

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ItemProps } from "../../components/Item";
export interface ItemCart extends ItemProps {
    amount: number;
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as ItemCart[],
    reducers: {
        addItemToCart: (state, action: PayloadAction<ItemCart>) => {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if(itemIndex !== -1){
                state[itemIndex].amount += action.payload.amount;
            }
            else {
                state.push({...action.payload, amount: action.payload.amount});
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
        },
        addHalfFlavorToCart: (state, action: PayloadAction<ItemCart>) => {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if(itemIndex !== -1){
                state[itemIndex].amount += action.payload.amount;
            }
            else {
                state.push({...action.payload, amount: action.payload.amount});
            }
        }, 
        removeHalfFlavorToCart: (state, action: PayloadAction<number>) => {
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

export const { addHalfFlavorToCart, removeHalfFlavorToCart } = cartSlice.actions;

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export const totalAmout = (state: RootState) => state.cart.map(item => item.amount).reduce((acc, total) => acc+total, 0);

export default cartSlice.reducer;