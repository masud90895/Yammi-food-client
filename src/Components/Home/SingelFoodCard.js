import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const SingelFoodCard = ({ food }) => {
  const { _id, name, image, ratings, price, detailers } = food;
  return (
    <div className=" relative lg:w-[70%] shadow-lg p-4 rounded-md">
      <div className=" relative group">
        <PhotoProvider>
          <PhotoView src={image}>
            <img className=" w-full rounded-lg h-[300px]" src={image} alt="" />
          </PhotoView>
        </PhotoProvider>
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
      <p className=" font-normal text-normal leading-4 text-gray-600 mt-4">
        {detailers?.length > 100 ? detailers.slice(0, 100) + "..." : detailers}
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
