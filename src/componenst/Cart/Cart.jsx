import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Order Summary: {cart.length}</h1>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >{tshirt.name}
                <button>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;