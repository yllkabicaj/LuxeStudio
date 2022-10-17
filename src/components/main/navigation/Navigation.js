import './Navigation.css';
import { useState } from 'react';
import logo from "../../../images/logo.gif";
function Navigation() {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }


  return (
    <div className='navigation'>
        <div className='left'>
            <ul>
                <li><a href=''>SPACE</a></li>
                <li><a href=''>EXECUTION</a></li>
                <li><a href=''>DESIGN</a></li>
                <li><a href=''>LIFESTYLE</a></li>
            </ul>
        </div>
        <div className='logo'>
            <img src={logo}></img>
        </div>
        <div className='right'>
        <ul>
                <li><a href=''>SEARCH</a></li>
                <li><a href='#arch'>ABOUT</a></li>
                <li><a href='#Contact'>LOG IN</a></li>
                <li><a href='#cart'>CART</a></li>
            </ul>
        </div>
        <div className='hamburger' onClick={updateMenu}>
            <span className={burger_class}></span>
            <span className={burger_class}></span>
            <span className={burger_class}></span>
        </div>
        <div className={menu_class}>
        <ul>
                <li><a href=''>SPACE</a></li>
                <li><a href=''>EXECUTION</a></li>
                <li><a href=''>DESIGN</a></li>
                <li><a href=''>LIFESTYLE</a></li>
                <li><a href=''>SPACE</a></li>
                <li><a href=''>EXECUTION</a></li>
                <li><a href=''>DESIGN</a></li>
                <li><a href=''>LIFESTYLE</a></li>
           </ul>
        </div>
    </div>
  );
}

export default Navigation;
