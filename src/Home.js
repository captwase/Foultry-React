import React from 'react';
import Product from "./Product";
import "./Home.css";   

function Home() {
    return (
            <div className="home">
                
                <img 
                    className="home__image"
                    src="/images/3471086.jpg" 
                    alt="">
                </img> 

                {/* Product id, Title, price, image */}
                    <div className="home__row">
                        <Product
                            id="101"
                            title="Full Chicken Curry cut Mix (1kg)"
                            price={180}
                            image="/images/chickprod.jpg"
                        />    
                        <Product
                        id="102"
                        title="Full Chicken Leg Piece (1kg)"
                        price={200}
                        image="/images/chickprod.jpg"
                        />
                        <Product
                        id="103"
                        title="Full Chicken liver (1kg)"
                        price={150}
                        image="/images/chickprod.jpg"
                        />
                        <Product
                        id="104"
                        title="Full Chicken Heart (1kg)"
                        price={220}
                        image="/images/chickprod.jpg"
                        />
                    </div>
            </div>
    );
}

export default Home;