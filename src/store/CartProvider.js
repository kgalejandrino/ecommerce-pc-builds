import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCurrentItem = state.items[existingItemIndex];

        let updatedItems;
        if(existingCurrentItem) {
            const updatedItem = {
                ...existingCurrentItem,
                amount: existingCurrentItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVE') {
        const removeItemIndex = state.items.findIndex(item => item.id === action.id);

        const existingCurrentItem = state.items[removeItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCurrentItem.price;
        let updatedItems;


        if(existingCurrentItem.amount > 1) {
            const updatedItem = {
                ...existingCurrentItem,
                amount: existingCurrentItem.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[removeItemIndex] = updatedItem;
        } else {
            return {
                items: [...state.items],
                totalAmount: state.totalAmount
            }
        } 

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVEALL') {
        const removeItemIndex = state.items.findIndex(item => item.id === action.id);

        const existingCurrentItem = state.items[removeItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCurrentItem.price * existingCurrentItem.amount;
        let updatedItems = state.items.filter(item => item.id !== action.id);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const decrementQuantityFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVEALL', id: id });
    };
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeOneItem: decrementQuantityFromCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
};

export default CartProvider;