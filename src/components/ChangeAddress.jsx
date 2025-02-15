import React, { useState } from "react";

const ChangeAddress = ({ setIsModalOpen, setAddress }) => {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    setAddress(newAddress);
    setIsModalOpen(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Yeni adresi giriniz"
        className="border border-blue-200 p-2 w-full rounded mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
        >
          İptal et
        </button>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Kayd et
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
