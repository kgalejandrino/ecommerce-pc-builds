import React, { useState, useEffect, Fragment } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import PcBuild from './components/PcBuild/PcBuild';
import PreBuilt from './components/PreBuilt/PreBuilt';
import Support from './components/Support/Support';
import SideCart from './components/Cart/SideCart/SideCart';
import MainHeader from './components/MainHeader/MainHeader';
import Footer from './components/Footer/Footer';
import CartProvider from './store/CartProvider';
import PreBuiltDetail from './pages/PreBuiltDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

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

  const location = useLocation();

  return (
    <CartProvider>
      {showCart && <SideCart onCloseCart={hideCartHandler} />}
      { location.pathname === '/checkout'
        ? <Route path="/checkout" exact component={ Checkout } />
        : <Fragment>
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
                <Route path="/cart" component={ Cart } />
                <Route path="/support" component={ Support }/>
              </Switch>
            </main>
            <Footer />
        </Fragment>
      }
    </CartProvider>
  );
}

export default App;
