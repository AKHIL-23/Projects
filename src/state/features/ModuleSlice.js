import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const moduletSlice = createSlice({
    name: 'module',
    initialState: {
        modules: [],
        module: {},
    },
    reducers: {

        AssinModuleListTORedux: (state, action) => {
            state.modules = action.payload;

        },
        setSingleModule: (state, action) => {
            state.module = action.payload
        },
        // clearFetechRecord: (state) => {
        //     state.student = {};
        // },
        // getStudentRecord: (state, action) => {
        //     state.student = state.students.find((element) => element._id === action.payload)

        // },

        // addStudent: (state, action) => {
        //     state.students = [action.payload, ...state.students];
        // },

    },
})

export const { AssinModuleListTORedux, setSingleModule } = moduletSlice.actions
export default moduletSlice.reducer