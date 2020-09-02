
import React from 'react';
import Details from "./Details";

function Data() {
    return (
            <div className="details">
                <Details
                    _id= "101"
                    title="Full Chicken Curry cut Mix (1kg)"
                    price={180}
                    image="/images/chickprod.jpg"
                    info=
                        "lorem ipsum chicken is full psjndj tyu mnmdk jb" 
                />
                <Details
                _id="104"
                title="Full Chicken Heart (1kg)"
                price={220}
                image="/images/chickprod.jpg"       
                info=
                        "lorem ipsum chicken is full psjndj tyu mnmdk jb"         
                />
            </div>
                        
            );
}

export default Data;
