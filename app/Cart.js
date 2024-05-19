import React, { useState } from 'react';
import { removeFromCart } from '../redux/actions/cartActions';

export default function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = product => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
