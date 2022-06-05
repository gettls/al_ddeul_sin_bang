import Home from './screens/Home/Home';
import Town from './screens/Town/Town';
import Login from './Login';
import User from './screens/User/User';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

function App() {

  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(userAuth => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           uid: userAuth.uid,
  //           email: userAuth.email,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  //   return unsubscribe;
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home/>}/>
        <Route path="/town" element={<Town />} />
        <Route path="/user" element={<User />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;