import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">ÖDEME</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border border-gray-300 p-2 mb-6">
            <div
              onClick={() => setBillingToggle(!billingToggle)}
              className="flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold mb-2">Fatura Bilgileri</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Ad</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ad giriniz"
                  className="w-full px-3 py-2 border border-gray-300 "
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email adresi giriniz"
                  className="w-full px-3 py-2 border border-gray-300 "
                />
              </div>
              <div>
                <label className="block text-gray-700">Telefon Numarası</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Telefon numarası giriniz #"
                  className="w-full px-3 py-2 border border-gray-300 "
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-300 p-2 mb-6">
            <div
              onClick={() => setShippingToggle(!shippingToggle)}
              className="flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold mb-2">Teslimat Bilgileri</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Adres</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Adres giriniz"
                  className="w-full px-3 py-2 border border-gray-300 "
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Şehir</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Şehir giriniz"
                  className="w-full px-3 py-2 border border-gray-300 "
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      city: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Kod</label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Zip Kod giriniz"
                  className="w-full px-3 py-2 border border-gray-300 "
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      zip: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-300 p-2 mb-6">
            <div
              onClick={() => setPaymentToggle(!paymentToggle)}
              className="flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold mb-2">Ödeme Seçenekleri</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2 space-x-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700">Kapıda Ödeme</label>
              </div>
              <div className="flex items-center mb-2 space-x-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700">Banka Kartı</label>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Banka Kartı Bilgileri
                  </h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Kart Numarası
                    </label>
                    <input
                      type="text"
                      placeholder="Kart numarası"
                      className="border bg-white  border-gray-300 p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Kart Sahibinin Adı
                    </label>
                    <input
                      type="text"
                      placeholder="Kart sahibinin adı"
                      className="border bg-white  border-gray-300 p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Son Kullanma Tarihi
                      </label>
                      <input
                        type="text"
                        placeholder="AA/YY"
                        className="border bg-white   border-gray-300 p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border bg-white  border-gray-300 p-2 w-full rounded"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-xl shadow-md border border-gray-300">
          <h3 className="text-lg font-semibold mb-4">Sipariş Özeti</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded "
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} * {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-gray-300 pt-4">
            <div className="flex justify-between">
              <span>Toplam Fiyat</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800">
            Sipariş et
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
