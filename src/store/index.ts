import { configureStore } from '@reduxjs/toolkit';
import mainApi from './services/mainApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './slices/authSlice';
import { TOKEN_NAME } from '@/lib/constants';
import routeSlice from './slices/routeSlice';
import tableSlice from './slices/tableSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		route: routeSlice,
		table: tableSlice,
		cart: cartSlice,
		[mainApi.reducerPath]: mainApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mainApi.middleware),
});

store.subscribe(() => {
	const state = store.getState();
	if (typeof window !== 'undefined') {
		if (state.auth.token) {
			localStorage.setItem(TOKEN_NAME, state.auth.token);
		} else {
			localStorage.removeItem(TOKEN_NAME);
		}
	}
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
