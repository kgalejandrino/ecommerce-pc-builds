import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PcBuild from './components/PcBuild/PcBuild';
import PreBuilt from './components/PreBuilt/PreBuilt';
import Support from './components/Support/Support';
import Cart from './components/Cart/Cart';
import MainHeader from './components/MainHeader/MainHeader';
import Footer from './components/Footer/Footer';
import './App.css';
import CartProvider from './store/CartProvider';
import PreBuiltDetail from './pages/PreBuiltDetail';

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
      {showCart && <Cart onCloseCart={hideCartHandler} />}
      <div className={showCart ? "container slide" : "container"}>
        <MainHeader 
          onShowCart={showCartHandler} 
          show={showCart}
        />
        <main>
          <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/build-a-pc" component={ PcBuild }/>
            <Route path="/pre-built-pc" exact component={ () => <PreBuilt onShowCart={showCartHandler} /> }/>
            <Route path="/pre-built-pc/:preBuiltId" component={ PreBuiltDetail } />
            <Route path="/support" component={ Support }/>
          </Switch>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
