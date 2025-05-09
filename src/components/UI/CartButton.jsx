import React from "react";

const CartButton = () => (
  <button
    type="button"
    className="ml-auto flex items-center p-2 rounded-md text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    aria-label="Shopping Cart"
  >
    {/* Placeholder for ShoppingCart icon (e.g., from lucide-react: <ShoppingCart size={24} />) */}
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    {/* Optional: Add a badge for cart items count */}
    <span className="ml-2 text-sm font-medium">0</span>
  </button>
);

export default CartButton;
