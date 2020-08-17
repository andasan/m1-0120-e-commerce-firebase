import React, {useState,useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.util';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });

    //componentDidUnmount
    //clean up function
    return () => {
      //unsubscribe
      unsubscribeFromAuth();
    }
  });

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;