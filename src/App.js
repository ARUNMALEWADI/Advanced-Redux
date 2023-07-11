import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux'
import { UiAction } from './Store/Ui-slice';
import Notification from './components/Notification/Notification'
let Isinitial=true;
function App() {
  
  const showcart=useSelector(state=>state.Ui.CartIsVisible)
  const notification=useSelector(state=>state.Ui.Notification)
  const cart=useSelector(state=>state.cart)
 const dispatch= useDispatch()
  useEffect(()=>{
    const putdata=async()=>{
      dispatch(UiAction.ShowNotification({status:"pending",title:"sending....",message:"sending cart data"}))
   const response=await fetch('https://ecommerce-abc49-default-rtdb.firebaseio.com/cart.json',{method:"PUT",body:JSON.stringify(cart),headers:{"Content-Type":"application/json"}})

   if(!response.ok)
   {
    throw new  Error("Sending data failed");
   }
  
   dispatch(UiAction.ShowNotification({status:"success",title:"Sent...",message:"Sent cart data successfully"}))
  
  }
   if(Isinitial)
   { Isinitial=false;
    return;

   }
  putdata().catch((error)=>dispatch(UiAction.ShowNotification({status:"error",title:"Error....",message:"sending cart data failed.."}))
  )
  },[cart,dispatch])

  return <Fragment>
   { notification&& <Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
    <Layout>
      {showcart&&<Cart />}
      <Products />
    </Layout>
    </Fragment>
 
}

export default App;
