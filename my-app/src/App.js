import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Tshirts } from './components/Tshirts';
import { Pants } from './components/Pants';
import { Shorts } from './components/Shorts';
import { Shoes } from './components/Shoes';
import { Checkout } from './components/Checkout';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Tshirts" element={<Tshirts/>}></Route>
            <Route exact path="/Pants" element={<Pants/>}></Route>
            <Route exact path="/Shorts" element={<Shorts/>}></Route>
            <Route exact path="/Shoes" element={<Shoes/>}></Route>
            <Route exact path="/Checkout" element={<Checkout/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
