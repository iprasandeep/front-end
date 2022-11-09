import React from 'react';
import  { Routes, Route } from 'react-router-dom'; 
import { Home } from './components/Home';
// import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { Admin } from './components/Admin';
import {NewProducts } from './components/NewProducts';
import {FeaturedProducts } from './components/FeaturedProducts';
import { OrderSummary } from './components/OrderSummary';
const LazyAbout = React.lazy(() => import ('./components/About'))

function App()
{
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/about' element={
        <React.Suspense fallback='Loading...'>
          <LazyAbout />
        </React.Suspense>
      } ></Route>
      <Route path='order-summary' element={<OrderSummary />} />
     
      <Route path="products" element= {<Products />}> 
          <Route index  element={ < FeaturedProducts />}/>
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />

            </ Route>
            <Route path='users' element = {<Users />} >
            <Route path=':userId' element={ < UserDetails />} />
            <Route path='admin' element={<Admin/>} />
            </ Route > 
        <Route path="*" element={<NoMatch />} />
    </Routes>
    </>
  );
}
export default App;