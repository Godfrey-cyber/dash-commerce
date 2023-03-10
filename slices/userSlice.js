// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import authService from "./authService.js"
// // const user = sessionStorage.getItem("user")

// const initialState = {
// 	user: null,
// 	isLoading: false,
// 	isSuccess: false,
// 	isError: false,
// 	message: ""
// }

// //register user
// export const register = createAsyncThunk("auth/register", async(user, thunkAPI) => {
// 	try {
// 		await authService.register(user)
// 	} catch (err) {
// 		const message = (error.response || error.response.data || error.response.data.message) || error.message || error.toString()
// 		return thunkAPI.rejectWithValue(message)
// 	}
// })
// export const authSlice = createSlice({
// 	name: "auth",
// 	initialState,
// 	reducers:{ 
// 		reset: (state, actions) => {
// 			state.isLoading = false,
// 			state.isSuccess = false,
// 			state.isError = false,
// 			state.message = ""
// 		},
// 	},
// 	extraReducers: (builder) => {
// 		builder
// 		.addCase(register.pending, (state) => {
// 			state.isLoading = true
// 		})
// 		.addCase(register.fulfilled, (state, action) => {
// 			state.isLoading = false
// 			state.isSuccess = true
// 			state.user = action.payload
// 		})
// 		.addCase(register.rejected, (state, action) => {
// 			state.isLoading = false
// 			state.isError = true
// 			state.message = action.payload
// 			state.user = null
// 		})
// 	}
// })
// export const { reset } = authSlice.actions
// export default authSlice.reducer