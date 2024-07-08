import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartComponent = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${getTotalPrice()}</h2>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
