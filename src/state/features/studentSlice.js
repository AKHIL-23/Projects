import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const studentSlice = createSlice({
    name: 'student',
    initialState: {
        students: [],
        student: {},
    },
    reducers: {

        listAllStudents: (state, action) => {
            state.students = action.payload;

        },
        getStudentRecord: (state, action) => {
            state.student = state.students.find((element) => element._id === action.payload)

        },
        clearFetechRecord: (state) => {
            state.student = {};
        },
        addStudent: (state, action) => {
            state.students = [action.payload, ...state.students];
        },

    },
})

export const { listAllStudents, getStudentRecord, clearFetechRecord, addStudent } = studentSlice.actions
export default studentSlice.reducer