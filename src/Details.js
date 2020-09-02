import React from 'react';
import {useStateValue} from "./StateProvider";
import data from '../data';


function Details(props) {
            const product = data.products.find(x => x._id === props.match.params.id);
        
        
            return (
                    <div>
                        <h1>{product.name}</h1>
                    </div>
                );
}

export default Details;