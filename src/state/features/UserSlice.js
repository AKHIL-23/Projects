import { createSlice } from '@reduxjs/toolkit'

const initialState = []


const UserSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        roles: [],
        user: {

        },
        sideBar: [],
    },
    reducers: {

        fetchUserRecord: (state, action) => {
            state.user = action.payload;

        },
        fetchUsersRecords: (state, action) => {
            state.users = action.payload;
        },
        clearFetchRecord: (state) => {
            state.user = {

            };
        },
        setSidebar: (state, action) => {
            state.sideBar = action.payload;
        },
        clearSidebar: (state) => {
            state.sideBar = [];
        },
        setRolesList: (state, action) => {
            state.roles = action.payload
        },


    },
})

export const { fetchUserRecord, fetchUsersRecords, clearFetchRecord, setSidebar, clearSidebar, setRolesList } = UserSlice.actions
export default UserSlice.reducer