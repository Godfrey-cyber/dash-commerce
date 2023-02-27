import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	items: [],
	// cart: [],
    quantity: 0,
    count: 1,
    total: 0
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
			// state.items = actions.payload;
		addToCart: (state, action) => {
			// state.quantity += 1 
			// state.items.push(action.payload)
			// state.total += action.payload.price
			// const index = state.items.findIndex(item => item.id === action.payload._id)
			const includesId = state.items.includes(action.payload.id)
			const newCart = [...state.items]
			if (includesId) {
				state.quantity += 1
				state.total += action.payload.price
			} else {
				state.quantity += 1 
				newCart.push(action.payload)
				state.total += action.payload.price
			}
			state.items = newCart
		},
		removeFromCart: (state, action) => {
			const index = state.items.findIndex(cartItem => cartItem._id === action.payload.id)
			const newBasket = [... state.items]
			if(index >= 0) {
				newBasket.splice(index, 1)
				state.quantity -= 1 
			} else {
				console.log('cannot remove item');
			}
			state.items = newBasket;
		},
		increaseCount: (state, action) => {
			state.items = state.items.map((item, i) => {
				if (item._id === action.payload._id) {
					item.count += 1;
				} 
				return item
			})
		},
		decreaseCount: (state, action) => {
			state.items = state.items.map((item, i) => {
				if (item.id === action.payload.id && item.count > 1) {
					item.count -= 1;
				} 
				return item
			})
		},
	},
})

export const { addToCart, removeFromCart, increaseCount, decreaseCount } = cartSlice.actions;
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) => state.cart.items.reduce((total, item) => total + item.price, 0);
export default cartSlice.reducer
