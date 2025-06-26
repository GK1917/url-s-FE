import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slice/userSlices';
import urlReducer from './slice/urlSlices';

export default configureStore({
    reducer: {
        user : userReducer,
        url : urlReducer,
    },

});