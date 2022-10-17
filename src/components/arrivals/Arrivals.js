import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import 'react-slideshow-image/dist/styles.css'
import './Arrivals.css';
const Data = [
    {
      url: "https://images.unsplash.com/photo-1617597837929-b34c021186f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        text: "Summer set"
    },
    {
      url: "https://images.unsplash.com/photo-1468174482686-1047396f13b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: 'Side tables'
    },
    {
      url: "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: 'Green Plants'
    },
    {
      url: "https://images.unsplash.com/photo-1608181831843-e7e72430f993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: 'Sev Candles'
    },
    {
      url: "https://images.unsplash.com/photo-1602607202679-d4a5e8d2b524?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
      text: 'Akasha Candles'
     },
    {
      url: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: 'Book Side Table'
    },
    {
      url: "https://images.unsplash.com/photo-1461218779480-bb61b6be1924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      text: 'Black Chair'
    },
]
const delay = 2500;

const Arrivals = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);


  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <h1 className='arrivalsTitle'>New Arrivals</h1>
    <div className="slideshowSlider"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
    {Data.map((backgroundImage, index) => (
          <div className="slide" key={index} style={{ 'backgroundImage': `url(${backgroundImage.url})` }}> <span className='text'>{backgroundImage.text}</span></div>
          
        ))}
    </div>
    <div className="slideshowDots">
        {Data.map((_, idx) => (
          <div key={idx}
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
      </div>
    </div>
 
  )
}

export default Arrivals;
