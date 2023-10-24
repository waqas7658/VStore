import React, { useEffect, useState } from "react";
import "./CollectionComp.css";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Products/ProductCard/ProductCard";
import { fetchProducts } from "../../Features/ProductSlice";
import { BASEURL } from "../../Utils/Base_URL";
import axios from "axios";

const CollectionComp = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const [searchInput, setSearchInput] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]); // State for sorted and filtered products
  const [category, setCategory] = useState([]);

  //dispatching and selecting data from store//
  const { products } = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // sorting all the products//
  const sortProducts = () => {
    const sorted = [...products]; // Create a copy of products array

    if (selectedSortOption === "highLow") {
      sorted.sort((a, b) => b.price - a.price); // High to Low
    } else if (selectedSortOption === "lowHigh") {
      sorted.sort((a, b) => a.price - b.price); // Low to High
    }

    setSortedProducts(sorted);
  };

  // search functionality
  const handleSearch = () => {
    const searchText = searchInput.trim().toLowerCase();

    if (searchText === "") {
      setSortedProducts(products); // Reset to original products if search is empty
    } else {
      const filteredProducts = products.filter(
        (item) => item.title.toLowerCase().includes(searchText)
        // item.category.toLowerCase().includes(searchText)
      );

      setSortedProducts(filteredProducts);
    }
  };

  useEffect(() => {
    sortProducts();
  }, [selectedSortOption, products]);

  /// fetching categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASEURL}/api/category/getCategory`);
      console.log(response.data);
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategory = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `${BASEURL}/api/products/filterproducts/${id}`
      );
      console.log("response", response);

      setSortedProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="">
        <div className="glitch-wrapper  pt-10 ">
          <div
            className="glitch flex flex-wrap  items-center gap-3"
            data-glitch="V Store"
          >
            V Store
            <span className="font-thin">/ </span>
            <span className=" font-thin  lg:text-[35px] text-[20px]">
              Collection
            </span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-2 my-10">
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
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />

                <button
                  class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2"
                  onClick={() => handleSearch()}
                >
                  <BsSearch />
                </button>
              </div>
            </div>
            {/* // Categories // */}
            <span className=" font-bold text-[20px] my-2">Categories</span>
          </div>
          <div>
            {category.map((item) => (
              <label key={item._id} className="block">
                <input
                  type="checkbox"
                  name="categories"
                  value={item._id}
                  onClick={() => handleCategory(item._id)}
                  className="mr-2 h-5 w-5 text-black border-gray-300 rounded focus:ring-black-500x`"
                />
                <span className=" text-lg"> {item.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3    bg-slate-100   shadow-lg ">
          {/* // div for dropdown // */}
          <div className="p-3">
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
          <div className=" my-10 grid   justify-center place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ms-7 ">
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
