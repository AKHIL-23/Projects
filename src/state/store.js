import { configureStore } from '@reduxjs/toolkit'

import RecordReducer from './features/RecordSlice'
import studetReducer from './features/studentSlice'
import userReducer from './features/UserSlice'
import AuthTokenSliceReducer from './features/AuthTokenSlice'
import ModuleReducer from './features/ModuleSlice'
export const store = configureStore({
    reducer: {
        getSingleRecord: RecordReducer,
        student: studetReducer,
        user: userReducer,
        authtoken: AuthTokenSliceReducer,
        module: ModuleReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})