import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './Footer';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
      <Route path='/' element={<Header/>}></Route>
      <Route path='/home' element={<App/>}></Route>
       <Route path='/contact' element={<Footer/>}></Route>
     </Routes>
    </Router> */}/
    <Header/>
    <App/>
    <Footer/>
   
  </React.StrictMode>
);


