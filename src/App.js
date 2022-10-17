import './App.css';
import Architecture from './components/architecture/Architecture';
import Arrivals from './components/arrivals/Arrivals';
import { BestSellers } from './components/bestsellers/BestSellers';
import { Cart, } from './components/cart/Cart';
import { Contact } from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Second from './components/section1/Second';

function App() {
  return (
    <div>
      <Main></Main>
      <Second></Second>
      <Arrivals></Arrivals>
      <Architecture>
  
      </Architecture>
   
      <BestSellers></BestSellers>
      <Contact></Contact>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
}

export default App;
