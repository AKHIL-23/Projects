import { createSlice } from '@reduxjs/toolkit'

const initialState = []


const UserSlice = createSlice({
    name: 'user',
    initialState: {

        user:{},
    },
    reducers: {

        fetchUserRecord: (state, action) => {
            state.user = action.payload;

        },
        clearFetchRecord: (state) => {
            state.user = {};
        },


    },
})

export const { fetchUserRecord, clearFetchRecord } = UserSlice.actions
export default UserSlice.reducer