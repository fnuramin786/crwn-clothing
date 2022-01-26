import { createSelector } from "reselect";


const selecCart = state => state.cart;

export const selecCartItems = createSelector(
    [selecCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selecCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);