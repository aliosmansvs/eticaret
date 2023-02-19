import {createReducer, on} from "@ngrx/store";

import {ShopState} from "../../model/shop";
import {shopDecrement, shopIncrement, shoptReset} from "./shop.action";


const initialState:ShopState={
    amount:0,
}
export const shopReducer = createReducer(
    initialState,

    on(shopIncrement, (state) => ({
        ...state,
        amount: state.amount+1

    })),
    on(shopDecrement, (state) => ({
        ...state,
        amount: state.amount - 1
    })),
    on(shoptReset, () => initialState),


)
