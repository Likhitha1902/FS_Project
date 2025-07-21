import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const itemCounts = cartItems.reduce((acc, item) => {
    acc[item.id] = acc[item.id]
      ? { ...acc[item.id], quantity: acc[item.id].quantity + 1 }
      : { ...item, quantity: 1 };
    return acc;
  }, {});
  const cartArray = Object.values(itemCounts);

  const totalPrice = cartArray.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cartArray.reduce((sum, item) => sum + item.quantity, 0);

  const handleBuy = () => {
    setShowModal(true);
  };

  const handlePayNow = () => {
    setCartItems([]);
    setShowModal(false);
    window.open(
      'https://drive.google.com/file/d/1-LzKGXFQiEfp1cc9twRVv8AG30NtfGs8/view?usp=sharing',
      '_blank'
    );
  };

  const incrementQuantity = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const decrementQuantity = (id) => {
    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
    }
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[url('https://img.freepik.com/free-vector/elegant-monoline-floral-seamless-pattern-design_44538-7899.jpg')] bg-contain">
      <h1 className="text-6xl font-bold text-green-900 text-center mb-2 pt-4 drop-shadow-6xl">
         Ready to bring your new green friends home?
      </h1>
      {isAuthenticated && (
        <p className="text-center text-green-900 font-medium text-4xl mb-8 drop-shadow-6xl">
          Total Items: {totalItems}
        </p>
      )}

      {!isAuthenticated ? (
        <p className="text-center text-red-600 font-semibold text-xl">
          Please login to view your cart items.
        </p>
      ) : cartItems.length === 0 ? (
        
        <p className="text-center text-gray-600 font-medium text-6xl">
          Your cart is empty.
          <img
            src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif"
            alt="Empty Cart"
            className="mx-auto mt-4 w-64 h-64 object-cover border-2 border-black rounded-full shadow-lg"
          />
        </p>
      ) : (
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-2xl mt-8">
          <ul className="divide-y divide-green-200">
            {cartArray.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl border border-green-300"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-green-800">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="text-black  rounded-full px-3 py-1 text-xl font-semibold text-center"
                      >
                        −
                      </button>
                      <span className="text-lg font-medium text-green-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => incrementQuantity(item)}
                        className="text-black rounded-full px-3 py-1 text-xl font-semibold text-center"
                      >
                        ＋
                      </button>
                    </div>
                    <p className="text-green-700 font-medium mt-1">
                      ₹{item.price} each
                    </p>
                    <p className="text-green-900 font-bold">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between items-center border-t pt-4">
            <h2 className="text-2xl font-bold text-green-900">
              Total: ₹{totalPrice}
            </h2>
            <button
              onClick={handleBuy}
              className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Check Out
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Order Summary</h3>
            <ul className="mb-4 max-h-60 overflow-y-auto">
              {cartArray.map((item) => (
                <li key={item.id} className="text-green-700 mb-1">
                  {item.name} × {item.quantity} = ₹{item.quantity * item.price}
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold text-green-900">
              Total Amount: ₹{totalPrice}
            </p>
            <p className="text-sm text-green-500 mb-4">
              Great picks! Let's get them rooted🪴
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handlePayNow}
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
