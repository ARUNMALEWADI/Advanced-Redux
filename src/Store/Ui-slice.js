import {createSlice} from '@reduxjs/toolkit'
const Ui=createSlice({
    name:"ui",
    initialState:{CartIsVisible:false},
    reducers:{
        toggle(state,action){
            state.CartIsVisible=!state.CartIsVisible;
        }

    }
})
export default Ui;
export const UiAction=Ui.actions;