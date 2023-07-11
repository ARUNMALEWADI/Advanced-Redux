import{createSlice} from '@reduxjs/toolkit'
const Cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalquantity:0,
        totalprice:0
        
    },
    reducers:{
        AdditemToCart(state,action)
        { const newitem=action.payload;
            const existingitem=state.items.find(item=>item.id===newitem.id)
            if(!existingitem)
            {state.items.push({id:newitem.id,price:newitem.price,quantity:1,name:newitem.title,totalprice:newitem.price,name:newitem.title})
                state.totalquantity+=1;
            }
            else
            {
                existingitem.quantity=existingitem.quantity+1;
                state.totalquantity+=1;
                existingitem.totalprice+=newitem.price;
            }

        },
        RemoveitemToCart(state,action)
        { const id=action.payload;
            const existingitem=state.items.find(item=>item.id===id)
            if(existingitem.quantity===1)
            { state.items=state.items.filter(item=>item.id!==id)
                state.totalquantity-=1;
            }
            else
            {  existingitem.quantity--
               existingitem.totalprice=existingitem.totalprice-existingitem.price;
               state.totalquantity-=1;
            }

        }
    }
})
export default Cartslice;
export const Cartaction=Cartslice.actions;