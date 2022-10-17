import './Footer.css';
import fb from "../../images/facebook.svg";
import be from "../../images/behance.svg";
import pi from "../../images/pinterest.svg";
import ig from "../../images/instagram.svg";

const Footer =()=> {

  return (
  <div className='footer'>
    <div>
        <ul className='first'>
            <li><h2>Categories</h2></li>
            <li><a href="">Furniture</a></li>
            <li><a href="">Fine Art</a></li>
            <li><a href="">Creators</a></li>
            <li><a href="">Questions &#38; Answers</a></li>
            <li><a href="">Jewelery</a></li>
        </ul>
        </div>

        <div>
        <ul className='first'>
            <li><h2>Featured Artists</h2></li>
            <li><a href="">Upsala Ekeby</a></li>
            <li><a href="">Svenskt Tenn</a></li>
            <li><a href="">Gordon Martz</a></li>
            <li><a href="">Furniture</a></li>
            <li><a href="">Josef Frank</a></li>
            <li><a href="">Bruno Carlson</a></li>
        </ul>
    </div>
    
    <div>
        <ul className='first'>
            <li><h2>Our Company</h2></li>
            <li><a href="">About us</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Investors</a></li>
        </ul>
    </div>
    <div className='first' id='form'>
        <h2>Connect with us</h2>
        <h3>Sign up for weekly emails with new listings, sales and more!</h3>
        <form>
            <input className='emaili' type="email" placeholder='Yes, here&#39;s my email' required></input><button className='btn'>	&gt;</button>
        </form>
        <div>
            <h2 className='sMedia'>Check us out on:</h2>
            <a href=''><img className='fb' src={fb}></img></a>
            <a href=''><img className='pi' src={pi}></img></a>
            <a href=''><img className='be' src={be}></img></a>
            <a href=''><img className='ig' src={ig}></img></a>
        </div>
    </div>
    </div>
  );
}

export default Footer;
