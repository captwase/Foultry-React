import React from 'react'
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout__ad" src=""></img>  
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click 
                            "Add to basket" next to the item.
                        </p>

                    </div>
                    ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* List out all of the Checkout products */}
                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>
                    )
                }
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
