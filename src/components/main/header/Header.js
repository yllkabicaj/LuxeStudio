import './Header.css';
import arrow from "../../../images/arrow.gif";

function Header() {
  return (
    <div className='header'>
        <div className='headertext'>
        <h1>Luxe Studio</h1>
        <h2>Interior Design</h2>
        </div>
        <div className='imgs'>
            <div className='img1'></div>
            <div className='img2'></div>
            <div className='ura'></div>
        </div>
        <a href='#second'><img className='arrow'  src={arrow}></img></a>
    </div>
  );
}

export default Header;
