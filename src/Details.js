import React from 'react';
import {useStateValue} from "./StateProvider";

function Details({id, title, image, price}) {
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
                    <div>
                        <img src={image}></img>
                        <h1>Detail page</h1>
                        <p className="product_title">{title}</p>
                    </div>
                );
}

export default Details;
