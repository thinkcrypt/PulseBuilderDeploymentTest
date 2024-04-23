import { createSlice } from '@reduxjs/toolkit';
import * as lib from '@/lib/constants';

export type CartItem = {
	id: string;
	image?: string;
	name: string;
	price: number;
	qty: number;
	note?: string;
};

export type Address = {
	name: string;
	phone: string;
	email: string;
	street: string;
	city: string;
	country?: string;
	state?: string;
	postalCode: string;
};

type State = {
	cartItems: CartItem[];
	totalItems?: number;
	subTotal: number;
	total: number;
	tax: number;
	isLoading: boolean;
	vat: number;
	shipping: number;
	discount: number;
	user: string;
	address: any;
	isAddressSet: boolean;
};

const tax = 0;

const initialState: State = {
	cartItems: [],
	totalItems: 0,
	subTotal: 0,
	total: 0,
	tax: tax,
	isLoading: false,
	vat: 0,
	shipping: 0,
	discount: 0,
	user: 'guest',
	address: {},
	isAddressSet: false,
};

// Helper function to save state to local storage
const saveStateToLocalStorage = (state: typeof initialState) => {
	typeof window !== 'undefined' && localStorage.setItem(lib.CART_NAME, JSON.stringify(state));
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState:
		typeof window !== 'undefined' && localStorage.getItem(lib.CART_NAME)
			? JSON.parse(localStorage.getItem(lib.CART_NAME)!)
			: initialState,
	reducers: {
		calculateCartTotals: (state, action) => {
			const { subTotal = 0, total = 0, vat = 0, discount = 0, shipping = 0 } = action.payload;
			state.subTotal = subTotal;
			state.total = total;
			state.vat = vat;
			state.total = total;
			state.total = total;
			state.discount = discount;
			state.shipping = shipping;
			saveStateToLocalStorage(state);
		},

		addToCart: (state, action) => {
			const item = action.payload;
			const existItem = state.cartItems.find((stateItem: CartItem) => stateItem.id === item.id);
			if (existItem) {
				state.cartItems = state.cartItems.map((stateItem: CartItem) =>
					stateItem.id === item.id
						? {
								...stateItem,
								qty: stateItem.qty + 1,
						  }
						: stateItem
				);
			} else {
				const newItem = {
					id: item?._id,
					image: item?.image,
					name: item?.name,
					price: item?.price,
					note: item?.note,
					qty: 1,
				};
				state.cartItems = [...state.cartItems, newItem];
			}

			saveStateToLocalStorage(state);
		},

		setAddress: (state, action) => {
			state.address = action.payload;
			state.isAddressSet = true;
		},

		removeAddress: state => {
			state.address = {};
			state.isAddressSet = false;
		},

		deleteOneFromCart: (state, action) => {
			const id = action.payload;
			const findItem = state.cartItems.find((stateItem: CartItem) => stateItem.id === id);
			if (findItem) {
				if (findItem.qty > 1) {
					state.cartItems = state.cartItems.map((stateItem: CartItem) =>
						stateItem.id === id
							? {
									...stateItem,
									qty: stateItem.qty - 1,
							  }
							: stateItem
					);
				} else {
					state.cartItems = state.cartItems.filter((stateItem: CartItem) => stateItem.id !== id);
				}
				if (state.cartItems.length === 0) {
					state.totalItems = 0;
					state.subTotal = 0;
					state.total = 0;
					state.vat = 0;
					state.shipping = 0;
					state.discount = 0;
				}
			}

			saveStateToLocalStorage(state);
		},

		deleteSingleItemFromCart: (state, action) => {
			const id = action.payload;
			const findItem = state.cartItems.find((stateItem: CartItem) => stateItem.id === id);
			if (findItem) {
				state.cartItems = state.cartItems.filter((stateItem: CartItem) => stateItem.id !== id);
			}
			//calculateTotals(state);
			if (state.cartItems.length === 0) {
				state.totalItems = 0;
				state.subTotal = 0;
				state.total = 0;
				state.vat = 0;
				state.shipping = 0;
				state.discount = 0;
			}
			saveStateToLocalStorage(state);
		},

		deleteAllFromCart: state => {
			state.cartItems = [];
			state.totalItems = 0;
			state.subTotal = 0;
			state.total = 0;
			state.vat = 0;
			state.shipping = 0;
			state.discount = 0;
			state.user = 'guest';

			saveStateToLocalStorage(state);
		},

		updateUser: (state, action) => {
			state.user = action.payload;
		},

		resetCart: state => {
			state.cartItems = [];
			state.totalItems = 0;
			state.subTotal = 0;
			state.total = 0;
			state.vat = 0;
			state.shipping = 0;
			state.discount = 0;
			state.user = 'guest';
			state.address = {};
			state.isAddressSet = false;

			saveStateToLocalStorage(state);
		},
		setCartLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const {
	addToCart,
	deleteOneFromCart,
	deleteAllFromCart,
	deleteSingleItemFromCart,
	resetCart,
	setCartLoading,
	calculateCartTotals,
	updateUser,
	setAddress,
	removeAddress,
} = cartSlice.actions;

export default cartSlice.reducer;
