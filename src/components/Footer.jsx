import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 min-h-96">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">KHADI</h3>
          <p></p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-xl font-semibold">Hızlı geçitler</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Ana sayfa
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Mağaza
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                İletişim
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Hakkımızda
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Bizi izle</h4>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="" className="hover:text-gray-300">
              <FaGithub />
            </a>
            <a href="" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Email giriniz"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button className="w-32 bg-red-600 text-white  px-4 py-2 rounded-r-lg border border-gray-600 ">
              Abone ol
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 KHADI &nbsp; &nbsp; &nbsp; Tüm haklar korunuyor</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="" className="hover:underline">
              Gizlilik sözleşmesi
            </a>
            <a href="" className="hover:underline">
              Formlar ve şartlar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
