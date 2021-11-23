import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import PcBuild from './components/PcBuild/PcBuild';
import PreBuilt from './components/PreBuilt/PreBuilt';
import Support from './components/Support/Support';
import SideCart from './components/Cart/SideCart';
import MainHeader from './components/MainHeader/MainHeader';
import Footer from './components/Footer/Footer';
import CartProvider from './store/CartProvider';
import PreBuiltDetail from './pages/PreBuiltDetail';
import MainCart from './pages/MainCart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);

  const hideCartHandler = () => setShowCart(false);

  useEffect(() => {
    if(showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showCart])

  return (
    <CartProvider>
      {showCart && <SideCart onCloseCart={hideCartHandler} />}
      <div className="wrapper">
        <MainHeader 
          onShowCart={showCartHandler} 
          show={showCart}
        />
        <main>
          <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/build-a-pc" component={ PcBuild }/>
            <Route path="/pre-built-pc" exact component={ () => <PreBuilt onShowCart={showCartHandler} /> }/>
            <Route path="/pre-built-pc/:preBuiltId" component={ () => <PreBuiltDetail onShowCart={showCartHandler} /> } />
            <Route path="/cart" component={ MainCart } />
            <Route path="/support" component={ Support }/>
          </Switch>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
