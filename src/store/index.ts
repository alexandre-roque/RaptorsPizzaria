import { configureStore } from '@reduxjs/toolkit';
import cart from './ducks/cart';
import theme from './ducks/theme';
import user from './ducks/user';

const store = configureStore({
    reducer: {
        theme: theme,
        user: user,
        cart: cart
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;