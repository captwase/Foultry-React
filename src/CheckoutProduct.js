import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({ id, title, image, price}) {
    const [{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        // remove item from basket...
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });

    };
    return (
        <div className="checkoutproduct">
            <img className="cp_image" src= {image} alt=""/>

            <div className="cp_info">
                <p className="cp_title">{title}</p>

                <p className="cp_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
