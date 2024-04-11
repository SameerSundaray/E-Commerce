import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import './Cart.css'; // Import CSS file for styling

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <h3>Cart</h3>
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              <div className="cart-item">
                <img src={item.imageUrl} alt={item.title} />
                <div>
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <Button variant="danger" onClick={() => handleRemoveFromCart(index)}>Remove</Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="total">
          <p>Total: ${cartTotal}</p>
          <Button variant="primary">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
