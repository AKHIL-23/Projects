import { createSlice } from '@reduxjs/toolkit'

const initialState = []


const UserSlice = createSlice({
    name: 'user',
    initialState: {

        user: {
            username: "",
            email: "",
            contactNumber: "",
            password: "",
            confirmPassword: "",
            role: "",

        },
    },
    reducers: {

        fetchUserRecord: (state, action) => {
            state.user = action.payload;

        },
        clearFetchRecord: (state) => {
            state.user = {
                username: "",
                email: "",
                contactNumber: "",
                password: "",
                confirmPassword: "",
                role: "",

            };
        },


    },
})

export const { fetchUserRecord, clearFetchRecord } = UserSlice.actions
export default UserSlice.reducer