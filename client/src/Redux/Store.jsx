import {configureStore} from '@reduxjs/toolkit'
import { loadersSlice } from './loaderSlice'

const Store = configureStore({
    reducer:{
        loaders: loadersSlice.reducer,
    },
});

export default Store;