import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";
import {Link} from "react-router-dom"; 

function Product({id, title, image, price}) {
    const [{}, dispatch] = useStateValue();


    const addToBasket = () => {
        //Add item to the basket...'
        dispatch({    
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    };

    return (
        
        <div className="product">
                <div className="product__info">
                <Link to= "/details">
                    <p className="product__title">{title}</p>
                </Link>
                    <p className="product__price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                </div>
            <Link to="/details">
                <img src={image} alt="" className="product__image"/>
            </Link>
            <button onClick={addToBasket}>Add to basket
                
            </button>
        </div>



    );
}

export default Product;
