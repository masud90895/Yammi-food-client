import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodServiceDetailes from './FoodServiceDetailes';

const FoodDetailes = () => {
    const foodData= useLoaderData()
    const { _id, name, image, ratings, price, detailers } = foodData.data;
    return (
        <div>
            <FoodServiceDetailes foodData={foodData}/>
        </div>
    );
};

export default FoodDetailes;