import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Nav from './Components/Nav/Nav';


const App = () => {
  return (
    <div className='wrapper' style={{  backgroundColor: "#0C0032 " }}>
      <div className='header' >
      <Header />
      </div>
      <div className='nav'> 
      <Nav  />
      </div>
      <div className='cont' >
      <Content />
      </div>



    </div>
  );
}

export default App;
