// "use client";
// import React from "react";
// import Link from "next/link";
// import { useCart } from "../context/CartContext"; // Adjust path as needed

// const CartPage = () => {
//   const { cart } = useCart();

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>
//               {item.name} - ${item.price}
//               {/* Add more item details as needed */}
//               <Link href={`/cart/${item.id}`} passHref>
//                 <button className="w-full py-2 bg-[#3b83f6d6] hover:bg-[#92400e] text-white font-semibold mt-2">
//                   View Details
//                 </button>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CartPage;
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext"; // Adjust path as needed
import { IoClose } from "react-icons/io5";

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); // Access removeFromCart function from context

  // State to manage cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toggle function to open/close cart
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Button to open/close cart */}
      <button
        onClick={toggleCart}
        className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md"
      >
        {isCartOpen ? "Close Cart" : "Open Cart"}
      </button>

      {/* Cart overlay or drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="w-80 bg-white h-full p-4 relative overflow-auto">
            {/* Close Icon */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 z-10"
              onClick={toggleCart}
            >
              <IoClose size={24} />
            </button>

            <h2 className="text-lg font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="mt-8 max-h-[200px] ">
                <ul>
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center mb-4"
                    >
                      <div className="text-black">
                        <p className="text-black">{item.name}</p>
                        <p className="text-black">${item.price}</p>
                      </div>
                      <div className="flex gap-2">
                        {/* Remove Item Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="py-1 px-2 bg-red-500 hover:bg-red-700 text-white rounded"
                          style={{ display: "block", visibility: "visible" }}
                        >
                          Remove
                        </button>
                        <Link href={`/cart/${item.id}`}>
                          <button className="py-1 px-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
