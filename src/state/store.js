import { configureStore } from '@reduxjs/toolkit'

import RecordReducer from './features/RecordSlice'
import studetReducer from './features/studentSlice'
export const store = configureStore({
    reducer: {
        getSingleRecord: RecordReducer,
        student: studetReducer,
    },
})