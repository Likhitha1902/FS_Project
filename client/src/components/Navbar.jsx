import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-green-500 text-white flex justify-between">
      <div>
        <Link className="mr-4" to="/">Home</Link>
        <Link className="mr-4" to="/about">About</Link>
        <Link className="mr-4" to="/gardeningtips">Gardening Tips</Link>
        <Link className="mr-4" to="/faqs">FAQs</Link>
        <Link className="mr-4" to="/shop">Shop</Link>

        {isAuthenticated && (
          <>
            <Link className="mr-4" to="/cart">Cart</Link>
          </>
        )}
      </div>
      <div>
        {!isAuthenticated ? (
          <Link to="/signin">Sign Up</Link>
          
        ) : (
          <Link className="mr-4" to="/profile">Account</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;