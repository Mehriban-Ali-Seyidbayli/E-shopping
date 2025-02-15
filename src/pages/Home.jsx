import { Categories, mockData } from "../assets/mockData";
import hero from "../assets/images/hero.png";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);
  return (
    <div>
      {" "}
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/12 mx-4">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              KATEGORİ SEÇ
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border border-gray-300">
              {Categories.map((category, index) => (
                <li
                  className="flex items-center text-sm font-medium"
                  key={index}
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-9/12 mt-8 md:mt-0 relative">
            <img className="h-full w-full" src={hero} alt="" />
            <div className="absolute bottom-8 left-8">
              <h2 className="text-4xl font-bold">HOŞGELDİNİZ</h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                BİNLERCE ÜRÜN
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                ŞİMDİ AL
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Çok satanlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {products.slice(0, 5).map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};
export default Home;
