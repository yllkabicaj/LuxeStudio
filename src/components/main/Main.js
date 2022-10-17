import Header from './header/Header';
import './Main.css';
import Navigation from './navigation/Navigation';

function Main() {
  return (
    <div className='mainbg'>
    <Navigation></Navigation>
    <Header></Header>
    </div>
  );
}

export default Main;
