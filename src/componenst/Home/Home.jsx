import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        console.log(tshirt)
    }
    console.log(tshirts)
    return (
        <div className='home-container'>
          <div className='t-shirts-container'>
            
            {
                tshirts.map(tshirt => <TShirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></TShirt> )
            }
          </div>
          <div className='cart-container'>
            <Cart></Cart>
          </div>
        </div>
    
    );
};

export default Home;