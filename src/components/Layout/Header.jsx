import React from "react";
import Logo from "../UI/Logo";
import CartButton from "../UI/CartButton";

const Header = () => {
  return (
    <header className="bg-orange-600 shadow-lg font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex items-center">
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
