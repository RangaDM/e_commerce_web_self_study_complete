import {configureStore} from '@reduxjs/toolkit'
import CategoryReducer from './Slices/CategorySlice'
import userReducer from './Slices/userSlices'

const store = configureStore({
    reducer: {
        category: CategoryReducer,
        user: userReducer,
    }
})

export default store