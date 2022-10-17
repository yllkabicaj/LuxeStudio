import { useState } from 'react';
import './BestSellers.css';

export const BestSellers =()=>{
    const [display1, setDisplay1] = useState('none');
    const [display2, setDisplay2] = useState('none');
    const [display3, setDisplay3] = useState('none');

    
    const DisplayFlexHandler1 =()=>{
        setDisplay1("flex");
    }
    const DisplayNoneHandler1 =()=>{
        setDisplay1("none");
    }
    const DisplayFlexHandler2 =()=>{
        setDisplay2("flex");
    }
    const DisplayNoneHandler2 =()=>{
        setDisplay2("none");
    }
      const DisplayFlexHandler3 =()=>{
        setDisplay3("flex");
    }
    const DisplayNoneHandler3 =()=>{
        setDisplay3("none");
    }  


    return(
        <div className='BestSellers'>
            <h1>Bestsellers</h1>
            <button className='ClickToShop'><a href='#cart'>Click to Shop</a></button>
            <div className='alignImgs'>
            <div className='bs1' onMouseEnter={DisplayFlexHandler1}><div onMouseLeave={DisplayNoneHandler1} style={{width: "100%", height: "100%",justifyContent: "center",alignItems: "center",flexDirection: "column", background: "rgba(51, 51, 51, 0.58)",cursor: "pointer", display: display1}} ><h1>Black Summer Chair</h1><h3>50.00&euro;</h3></div></div>
            <div className='bs2' onMouseEnter={DisplayFlexHandler2}><div onMouseLeave={DisplayNoneHandler2} style={{width: "100%", height: "100%",justifyContent: "center",alignItems: "center",flexDirection: "column", background: "rgba(51, 51, 51, 0.58)",cursor: "pointer", display: display2}} ><h1>Black Marble Cabinet</h1><h3>100.00&euro;</h3></div></div>
            <div className='bs3' onMouseEnter={DisplayFlexHandler3}><div onMouseLeave={DisplayNoneHandler3} style={{width: "100%", height: "100%",justifyContent: "center",alignItems: "center",flexDirection: "column", background: "rgba(51, 51, 51, 0.58)",cursor: "pointer", display: display3}} ><h1>Olive Green Sofa</h1><h3>200.00&euro;</h3></div></div>
            </div>
        </div>
    );
}