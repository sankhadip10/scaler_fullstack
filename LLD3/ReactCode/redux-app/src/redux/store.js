import { configureStore } from "@reduxjs/toolkit";


import counterReducer from "./slices/counterSlice";
import todoReducer from "./slices/todoSlice";
//This creates redux store for us and store 

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo:todoReducer,
        
    },
    devTools:true,
    
});

// const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );