import {configureStore} from '@reduxjs/toolkit'
import Ui from './Ui-slice';
import Cartslice from './Cart-slice';

const Store=configureStore({reducer:{Ui:Ui.reducer,cart:Cartslice.reducer}})
export default Store;