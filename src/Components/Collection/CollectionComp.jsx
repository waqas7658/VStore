import React, { useEffect, useState } from "react";
import "./CollectionComp.css";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Products/ProductCard/ProductCard";
import { fetchProducts } from "../../Features/ProductSlice";

const CollectionComp = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("default");

  //dispatching and selecting data from store//

  const { products } = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length) {
      return;
    }
    dispatch(fetchProducts());
  }, [dispatch]);

  // sorting all the products//

  const sortedProducts = [...products]; // Create a copy of products array

  if (selectedSortOption === "highLow") {
    sortedProducts.sort((a, b) => b.price - a.price); // High to Low
  } else if (selectedSortOption === "lowHigh") {
    sortedProducts.sort((a, b) => a.price - b.price); // Low to High
  }

  return (
    <>
      <div className="h-[80px]">
        {/* <div class="glitch-wrapper">
          <div class="glitch" data-glitch="V Store">
            V Store
          </div>
        </div> */}
      </div>
      <div className="grid lg:grid-cols-4 gap-2">
        <div className="lg:col-span-1  bg-slate-100 p-3 shadow-lg ">
          <div className=" flex flex-col ">
            <span className=" font-bold text-[20px] my-2">Search</span>
            {/* // Input Field //          */}
            <div class="mb-3">
              <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

                <button
                  class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2"
                >
                  <BsSearch />
                </button>
              </div>
            </div>
            {/* // Categories // */}
            <span className=" font-bold text-[20px] my-2">Categories</span>
          </div>
        </div>
        <div className="lg:col-span-3    bg-slate-100 p-3  shadow-lg ">
          {/* // div for dropdown // */}
          <div className="">
            <select
              data-te-select-init
              className="w-[200px] rounded-md focus:border-gray-950 focus:outline-none"
              value={selectedSortOption}
              onChange={(e) => setSelectedSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="highLow">High-to-Low</option>
              <option value="lowHigh">Low-to-High</option>
            </select>
          </div>
          <div className=" my-20 grid   justify-center place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ms-7 ">
            {sortedProducts.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
{
}
export default CollectionComp;
