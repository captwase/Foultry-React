import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();

    console.log(basket);

    return (
            <nav className="header">
                
                    {/* logo */}
                    <Link to="/">
                        <div className="header___logo">
                            <span className="span-logo1">foultry</span>
                            <span className="span-logo2">9987625210</span>
                        </div>
                    </Link>
                    
                    {/* Search Box */}
                    <div className="header__search">
                    <input type="text" className="header__searchInput"/>
                    <SearchIcon className="header__searchIcon"></SearchIcon>
                    </div>
                
                    {/* Nav links */}
                    <div className="header__nav">
                        
                        {/* 1st link */}
                        <Link to = "/" className="header__link">
                            <div className="header__option">
                                <span className="span-line">Location-search</span>
                            </div>
                        </Link>

                        {/* 2nd link */}
                        <Link to="/" className="header__link">
                            <div className="header__option">
                                <span className="span-line"> Orders</span>
                            </div>
                        </Link>

                        {/* 3rd link */}
                        <Link to="/login" className="header__link">
                            <div className="header__option">
                                <span className="span-line">Sign In </span>
                            </div>
                        </Link>

                        {/* 4th link */}
                        <Link to="/checkout" className="header__link">
                            <div className="header__basket">
                                {/* basket icon */}
                                <ShoppingBasketIcon></ShoppingBasketIcon>
                                {/* No of Items in Basket */}
                                <span className="span-line header__basketcount">
                                    {basket?.length}
                                </span>
                            </div>
                        </Link>
                    </div>    
                   
            </nav>
       
    )
}

export default Header
