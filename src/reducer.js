
export const initialState = {
    basket: [
        {
            id:"12321341",
            title:"Full Chicken Curry cut Mix (1kg)",
            price:180,
            image:"/images/chickprod.jpg", 
        },
        {
            id:"12321341",
            title:"Full Chicken Curry cut Mix (1kg)",
            price:180,
            image:"/images/chickprod.jpg", 
        },
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
        //Logic for adding item to basket
        return {
            ...state,
            basket: [...state.basket, action.item],
        };
    case 'REMOVE_FROM_BASKET':
        //Logic for removing item from basket

        // we cloned the basket
        let newBasket = [...state.basket];

        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

        if (index >= 0) {
            // Item exists in basket, remove it...
            newBasket.splice(index, 1);
        } else{
            console.warn(
                'Cant remove product  as its not in the basket'
               
            );
        
        }

        return {
            ...state,
        basket: newBasket,
        };
    default:
        return state;
    }
};

export default reducer;