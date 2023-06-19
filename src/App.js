import Nav from './Nav';
import Hero from './Hero';
import './App.css';
import Herobox from './Herobox';
import Awards from './Awards';
import Product from './Products';
import Corevalues from './Corevalues';
import Workcontact from './Workcontact'
import Footer from './Footer';
import Companies from './Companies';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Herobox/>
      <Awards/>
      <Product/>
      <Companies/>
      <Corevalues/>
      <Workcontact/>
      <Footer/>
    </div>
  );
}

export default App;
