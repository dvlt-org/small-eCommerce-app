import React from "react";

const Checkout = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <button disabled={cart.length === 0}>Place Order</button>
    </div>
  );
};

export default Checkout;
