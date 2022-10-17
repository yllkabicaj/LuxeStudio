import google from "../../images/search-engine.svg";
import fb from "../../images/facebook.svg";
import apple from "../../images/apple.svg";

import "./Contact.css";

export const Contact = () =>{
return(
    <div className="Contact" id="Contact">
        <h1 className="title">Log in/Sign up</h1>
        <form>
        <table>
            <tr>
                <td colSpan={3}>Sign up using:</td>
            </tr>
            <tr>
                <td><button><img className="img" src={google}></img>Google</button></td>
                <td><button><img className="img" src={fb}></img>Facebook</button></td>
                <td><button><img className="img" src={apple}></img>Apple</button></td>
            </tr>
            <tr>
                <td colSpan={3}>
                   ------------------------ or
 ------------------------                </td>
            </tr>
            
            <tr className="input">
 <td>               <input type={"email"} placeholder="Email Address" required ></input></td>
            </tr>
            <tr className="input">
 <td>               <input type={"password"} placeholder="Password" required></input></td>
            </tr>
            <tr>
                <button className="conButton">Sign in</button>
            </tr>
        </table>
        </form>
    </div>
);


}