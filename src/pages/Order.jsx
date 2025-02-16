import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="conatiner mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Teşekkürler!</h2>
      <p>Siparişin alındı</p>
      <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Sipariş özeti</h3>
        <p>Sipariş Numarası:{order.orderNumber}</p>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Teslimat Bilgileri</h4>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Sipariş edilen ürünler</h4>
          {order.products.map((product) => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>
                {product.name} (x {product.quantity})
              </p>
              <p>{product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Toplam Fiyat:</span>
          <span className="font-semibold">{order.totalPrice}</span>
        </div>
        <div className="mt-6">
          <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600">
            Sipariş izleme
          </button>
          <button
            onClick={() => navigate("/")}
            className=" ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800"
          >
            Siparişe devam et
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
