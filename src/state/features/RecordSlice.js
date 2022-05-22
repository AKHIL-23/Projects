import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const OneStudentData = createSlice({
    name: 'getSingleRecord',
    initialState,
    reducers: {

        updateStudentRecord: (state, action) => {
            state = action.payload
        },
    },
})


export const { updateStudentRecord } = OneStudentData.actions

export default OneStudentData.reducer