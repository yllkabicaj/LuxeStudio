import React from "react";
import { useState } from "react";
import "./Architecture.css";

const Architecture = ()=>{
    const [display1, setDisplay1] = useState('none');
    const [display2, setDisplay2] = useState('none');
    const [display3, setDisplay3] = useState('none');
    const [display4, setDisplay4] = useState('none');

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
    const DisplayFlexHandler4 =()=>{
        setDisplay4("flex");
    }
    const DisplayNoneHandler4 =()=>{
        setDisplay4("none");
    }

    
    return(
        <div className="arch" id="arch">
            <h1>Our Architects' Work</h1>
            <div className="alignImages">
                <div className="image1" onMouseEnter={DisplayFlexHandler1}><div onMouseLeave={DisplayNoneHandler1} style={{width: "100%", height: "100%",justifyContent: "center",alignItems: "center",flexDirection: "column", background: "rgba(51, 51, 51, 0.58)",cursor: "pointer", display: display1}} ><h1>Glauber Sampaio</h1><h3>Architect, Interior Designer, Photographer, Artist</h3></div></div>
                <div className="image2" onMouseEnter={DisplayFlexHandler2}><div onMouseLeave={DisplayNoneHandler2} style={{width: "100%", height: "100%",justifyContent: "center",alignItems: "center",flexDirection: "column", background: "rgba(51, 51, 51, 0.58)",cursor: "pointer", display: display2}} ><h1>Christopher Maximilian</h1><h3>Architect, Interior Designer, Photographer</h3></div></div>
            </div>
            <div className="alignImages">
                <div className="image3" href="/thirdArtist" onMouseEnter={DisplayFlexHandler3}><div onMouseLeave={DisplayNoneHandler3} style={{width: "100%", height: "100%",justifyContent: "center",alignItems: "center",flexDirection: "column", background: "rgba(51, 51, 51, 0.58)" ,cursor: "pointer", display: display3}} ><h1>Francesca Tosolini</h1><h3>Architect, Interior Designer, Photographer</h3></div></div>
                <div className="image4" href="/fourthArtist" onMouseEnter={DisplayFlexHandler4}><div onMouseLeave={DisplayNoneHandler4} style={{width: "100%", height: "100%",justifyContent: "center",alignItems: "center",flexDirection: "column", background: "rgba(51, 51, 51, 0.58)",cursor: "pointer", display: display4}} ><h1>Camile Brodard</h1><h3>Architect</h3></div></div>
            </div>
           
        </div>

        
    );
}
export default Architecture;