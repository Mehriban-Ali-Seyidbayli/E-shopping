import React from "react";

const Login = ({ openSignUp }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Giriş</h2>
      <form>
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
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Hatırlat</span>
          </label>
          <a href="#" className="text-red-800">
            Şifrenimi unutdun?
          </a>
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Giriş Yap
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Henüz bir hesabın yok mu?</span>
        <button onClick={openSignUp} className="text-red-800">
          Kayıt Ol
        </button>
      </div>
    </div>
  );
};

export default Login;
