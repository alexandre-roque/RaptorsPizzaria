import { configureStore } from '@reduxjs/toolkit';
import theme from './ducks/theme';
import user from './ducks/user';

const store = configureStore({
    reducer: {
        theme: theme
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;