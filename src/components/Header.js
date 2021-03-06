import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css"

function Header() {

    var user ="Fabiano"
    
    return (
        <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="amazon_logoDELETED.png"
            alt="     -"
          />
        </Link>

        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
        </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          
          <div className="header__option">
            <span className="header__optionLineOne">Hello Fabiano</span>
            <span className="header__optionLineTwo">{'Sign In'}</span>
          </div>
          
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        </Link>

            
        </nav>
    )
}

export default Header
