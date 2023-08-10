import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    // console.log("clicked", id, "ya ha");
    navigate(`/productdetail/${id}`);
  };
  return (
    <>
      <div
        className="w-[17rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        onClick={() => handleClick(item.id)}
      >
        <a href="#">
          <img
            className="p-2 rounded-t-lg h-60 w-100 "
            src={item?.image}
            alt="product image"
          />
        </a>
        <div className="p-2">
          <a href="#">
            <h5 className="my-2      text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item?.title}
            </h5>
          </a>
          <a href="#">
            <h5 className="my-2 text-md tracking-tight text-gray-900 dark:text-white">
              {item?.description.substring(0, 50)}
            </h5>
          </a>

          <div className="flex  items-center justify-between ">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {item?.price}
            </span>
            <a
              href="#"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
