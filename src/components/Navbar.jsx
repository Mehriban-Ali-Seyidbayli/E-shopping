import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const products = useSelector((state) => state.cart.products);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">KHADI</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              className="w-full border border-gray-300 py-2 px-4"
              type="text"
              placeholder="Ürün ara"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute bottom-2 text-xs w-4 h-4 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:block"
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Ana sayfa
        </Link>
        <Link to="/shop" className="hover:underline">
          Mağaza
        </Link>
        <Link className="hover:underline">İletişim</Link>
        <Link className="hover:underline">Hakkımızda</Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};
export default Navbar;
