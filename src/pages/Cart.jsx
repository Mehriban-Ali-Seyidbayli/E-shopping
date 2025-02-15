import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/images/emptyCart.png";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main Str,0012");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SEPET</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b border-b-red-200 items-center mb-4 text-xs font-bold">
                <p>ÜRÜNLER</p>
                <div className="flex space-x-14">
                  <p>FİYAT</p>
                  <p>SAYI</p>
                  <p>ARA TOPLAM</p>
                  <p>SİL</p>
                </div>
              </div>
              {cart?.products?.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 border-b border-b-gray-300"
                >
                  <div className="md:flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex space-x-12 items-center">
                    <p>${product.price}</p>
                    <div className="flex items-center justify-center border border-gray-300">
                      <button
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        className="text-xl font-bold px-1.5 border-r border-gray-300"
                      >
                        -
                      </button>
                      <p className="text-xl px-2">{product.quantity}</p>
                      <button
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        className="text-xl px-1 border-1 border-gray-300 "
                      >
                        +
                      </button>
                    </div>
                    <p>${(product.quantity * product.price).toFixed(2)}</p>
                    <button
                      onClick={() => dispatch(removeFromCart(product.id))}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-xl shadow-md border border-gray-300">
              <h3 className="text-sm font-semibold mb-5">SEPET TOPLAMI</h3>
              <div className="flex justify-between mb-5 border-b border-b-gray-300 pb-1">
                <span className="text-sm">Tüm ürünler</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b border-b-gray-300 pb-2">
                <p>Teslimat:</p>
                <p>
                  Teslimat: <span className="text-xs font-bold">{address}</span>
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-blue-500 hover:underline mt-1 ml-2"
                >
                  Adresi deyiş
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Toplam fiyat:</span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
              >
                Sepeti Onayla
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img src={EmptyCart} alt="" className="h-96 w-96" />
          <p className="text-2xl py-4">Sepetinde henüz ürün yok</p>
        </div>
      )}
    </div>
  );
};
export default Cart;
