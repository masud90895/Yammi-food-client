import React from "react";
import { Link } from "react-router-dom";

const SingelFoodCard = ({ food }) => {
  const { _id, name, image, ratings, price, detailers } = food;
  return (
    <div className=" relative lg:w-[70%] shadow-lg p-4 rounded-md">
      <div className=" relative group">
        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <img
          className=" w-full h-[300px]"
          src={image}
          alt="A girl Posing Img"
        />
        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
          <Link to={`../foodservice/${_id}`}>
            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-yellow-500 py-3 w-full mt-2 text-white">
              View Detailers
            </button>
          </Link>
        </div>
      </div>
      <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
        {name}
      </p>
      <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
        ${price}/<small>only</small>
      </p>
      <p className=" font-normal text-base leading-4 text-gray-600 mt-4">
        rating: <strong>{ratings}</strong> star
      </p>
      <Link to={`../foodservice/${_id}`}>
        <button className=" bg-transparent font-medium text-base leading-4 border-2 border-yellow-500  py-3 w-full mt-4 text-black rounded-md hover:bg-yellow-500 hover:text-black">
          View Detailers
        </button>
      </Link>
    </div>
  );
};

export default SingelFoodCard;
