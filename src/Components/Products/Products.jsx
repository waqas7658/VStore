import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import axios from "axios";
import { fetchProducts } from "../../Features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const filterProducts = products.filter((products) => products.isFeatured);
  // const [products, setProducts] = useState([]);
  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get(`${BASEURL}/api/products/allproducts`);
  //     console.log(response.data);
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchProducts());
    // fetchProducts();
  }, [dispatch]);

  return (
    <>
      <div className=" py-20">
        <div className="flex justify-center items-center gap-2 lg:gap-5">
          <hr className="w-25" />
          <h1 className="lg:text-[3rem] md:text-2xl sm:text-3xl text-balance">
            Daily Deals
          </h1>
          <hr className="w-25" />
        </div>

        <div className="mx-auto w-full flex flex-col justify-center items-center my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:ms-7">
            {filterProducts.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* {filterProducts ? (
        <div className=" py-20">
          <div className="flex justify-center items-center gap-2 lg:gap-5">
            <hr className="w-25" />
            <h1 className="lg:text-[3rem] md:text-2xl sm:text-3xl text-balance">
              Daily Deals
            </h1>
            <hr className="w-25" />
          </div>

          <div className="mx-auto w-full flex flex-col justify-center items-center my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:ms-7">
              {filterProducts.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>No featured Products</h1>
        </div>
      )} */}
    </>
  );
};

export default Products;
