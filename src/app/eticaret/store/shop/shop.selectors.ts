import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SHOP_REDUCER, ShopState} from "../../model/shop";

export const shopSelector = createFeatureSelector<ShopState>(SHOP_REDUCER);

export const selectCurrentShop = createSelector(
    shopSelector,
    (state: ShopState) => state.amount
);
