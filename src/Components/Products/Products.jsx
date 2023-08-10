import React, { useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";
import axios from "axios";
import { fetchProducts } from "../../Features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../Features/ProductSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
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

        <div className=" my-20 grid   justify-center place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ms-7 ">
          {products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
