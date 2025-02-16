import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Mağaza</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-xl font-semibold text-blue-950 my-48">
          Böyle bir ürün bulunamadı.
        </div>
      )}
    </div>
  );
};

export default FilterData;
