import React from "react";

const Register = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kayıt ol</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Ad</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300"
            placeholder="Adınızı giriniz"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300"
            placeholder="Email giriniz"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Şifre</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300"
            placeholder="Şifreyi giriniz"
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Kayıt Ol
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Zaten bir hesabın var mı?</span>
        <button onClick={openLogin} className="text-red-800">
          Giriş yap
        </button>
      </div>
    </div>
  );
};

export default Register;
