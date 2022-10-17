import { useState } from "react";
import "./Cart.css";

const PAGE_PRODUCT ='products';
const PAGE_CART ='cart';

export const Cart =()=>{
    const [cart, setCart] =useState([]);
    const [page, setPage] =useState(PAGE_PRODUCT);


    const itemsPrice = cart.reduce((a,c)=>a+c.price,0);
    const shippingPrice = itemsPrice>100 ? 20:0;
    const totalPrice = itemsPrice + shippingPrice;
    const [products] = useState([
        {
            id: 1,
            item: "SEV Candle",
            price: 20.00,
            img: "https://images.unsplash.com/photo-1608181831688-b2a476cb100c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
           amount: 1,
           category: "candles"
          },
          {
            id: 2,
            item: "Sundried Linen Candle",
            price: 20.00,
            img: "https://images.unsplash.com/photo-1642773472991-9d5151fbd83c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
            amount: 1,
            category: "candles"
          },
          {
            id: 3,
           item: "White Chair",
            price: 100.00,
            img: "https://images.unsplash.com/photo-1635622045198-86d86c29c5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=577&q=80",
            amount: 1,
            category: "interior"
          },
          {
            id: 4,
            item: "Wooden Mirror",
            price: 100.00,
            img: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            amount: 1,
          },
          {
            id: 5,
            item: "Wooden Chair",
            price: 50.00,
            img: "https://images.unsplash.com/photo-1658211312038-4293c7bdd37e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
           amount: 1,
          },
          {
            id: 6,
           item: "Flower Vase",
            price: 25.00,
            img: "https://images.unsplash.com/photo-1646035343414-9843a57cbb57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            amount: 1,
          },
          {
            id: 7,
            item: "Black Chair",
            price: 50.00,
            img: "https://images.unsplash.com/photo-1655749757258-4587c17a566d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=619&q=80",
            amount: 1,
          },
          {
            id: 8,
            item: "Black Marble Cabinet",
            price: 100.00,
            img: "https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            amount: 1,
          }, {
            id: 9,
            item: "White Marble Cabinet",
            price: 100.00,
            img: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            amount: 1,
          },
          {
            id: 10,
            item: "Olive Green Sofa",
            price: 200.00,
            img: "https://images.unsplash.com/photo-1567016507665-356928ac6679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            amount: 1,
          },{
            id: 11,
            item: "Dinner Table",
            price: 500.00,
            img: "https://images.unsplash.com/photo-1617098591651-dd95032bc8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            amount: 1
          },{
            id: 11,
            item: "Orange Sofa",
            price: 200.00,
            img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            amount: 1
          }
    ]);
    const addToCart = (product)=>{
        setCart([...cart,{...product}]);
    }


    const renderProducts = ()=>(<>
           <h1 className="title">Products</h1>
           <header><button className="buttons1" onClick={()=>navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button>
            <button className="buttons1" onClick={()=>navigateTo(PAGE_PRODUCT)}>View Products</button></header>
          
        <div className="products">
            {products.map((product,idx)=>(
                <div className="product" key={idx}>
                    <h3 className="texth3">{product.item}</h3>
                    <h4 className="texth4">&euro;{product.price.toFixed(2)}</h4>
                    <img src={product.img} alt={product.item}></img>
                    <button className="buttons" onClick={()=>addToCart(product)}>Add to cart</button>
                </div>
            ))}
        </div>
        </>)

const removeFromCart =(productToRemove)=>{
setCart(cart.filter((product) => product !== productToRemove));
}
   
    const renderCart = ()=>(<>
             <h1 className="title">Cart</h1>
             <header><button className="buttons1" onClick={()=>navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button>
            <button className="buttons1" onClick={()=>navigateTo(PAGE_PRODUCT)}>View Products</button></header>
          
        <div className="products">
            {cart.map((product,idx)=>(
        
                          <div className="product" key={idx}>
                    <h3 className="texth3">{product.item}</h3>
                    <h4 className="texth4">&euro;{product.price.toFixed(2)}</h4>
                    <img src={product.img} alt={product.item}></img>
                    <button className="buttonsC" onClick={()=>removeFromCart(product)}>Remove from cart</button>
                </div>
                
            ))}
           
        </div>
        <div className="total">
             {cart.length !== 0 &&(
                <>
                <div className="totalRows"><h1>Items Price</h1><h1>${itemsPrice.toFixed(2)}</h1></div>
                <div className="totalRows"><h1>Shipping Price </h1><h1>${shippingPrice.toFixed(2)}</h1></div>
                <div className="totalRows" id="tr"><h1>Total Price </h1><h1>${totalPrice.toFixed(2)}</h1></div>
                <button onClick={() => window.location.reload()} className="buttoniBuy">Buy</button>
                </>
            )}
            {cart.length == 0 && (
              <div className="zeroCart">There are no items in your cart</div>
            )}
            </div>
     
        </>)

        const navigateTo = (nextPage)=>{
            setPage(nextPage);
        }

    return(
        <div className="Cart" id="cart">
    {page === PAGE_PRODUCT && renderProducts()}
            {page === PAGE_CART && renderCart()}
        </div>
    );
}