import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null
}


const AuthTokenSlice = createSlice({
    name: 'authtoken',
    initialState,
    reducers: {

        setAuthToken: (state, action) => {

            state.token = action.payload;


        },
        clearAuthToken: (state) => {
            state.token = null
        },


    },
})

export const { setAuthToken, clearAuthToken } = AuthTokenSlice.actions
export default AuthTokenSlice.reducer