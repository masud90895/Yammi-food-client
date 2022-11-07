import React from "react";
import { Link } from "react-router-dom";

const FoodServicesCard = ({food}) => {
    const { _id, name, image, ratings, price, detailers } = food;
  return (
    <div className=" relative lg:w-[75%] shadow-lg p-3 rounded-lg">
      <div className=" relative group">
        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <img
          className=" w-full h-[350px]"
          src={image}
          alt="A girl Posing Img"
        />
      </div>
      <p className=" font-normal text-2xl leading-5 text-gray-800 md:mt-6 mt-4 font-serif">
        {name}
      </p>
      <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
        ${price}/<small>only</small>
      </p>
      <p className=" font-normal text-base leading-4 text-gray-600 mt-4">
        ratings: <strong>{ratings}</strong> Star
      </p>
      <p className=" font-normal text-normal leading-4 text-gray-600 mt-4">
        {
            detailers.length > 100? detailers.slice(0,100)+"..." : detailers
        }
      </p>

      <Link to={`../foodservice/${_id}`}>
      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-yellow-500 py-3 w-full mt-2 text-black rounded-md hover:bg-yellow-500">
             View Details
          </button>
      </Link>

    </div>
  );
};

export default FoodServicesCard;
