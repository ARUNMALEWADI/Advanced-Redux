import {createSlice} from '@reduxjs/toolkit'
const Ui=createSlice({
    name:"ui",
    initialState:{CartIsVisible:false,Notification:null},
    reducers:{
        toggle(state,action){
            state.CartIsVisible=!state.CartIsVisible;
        },
      ShowNotification(state,action)
      {
        state.Notification={status:action.payload.status,title:action.payload.title,message:action.payload.message}
      }
    }
})
export default Ui;
export const UiAction=Ui.actions;