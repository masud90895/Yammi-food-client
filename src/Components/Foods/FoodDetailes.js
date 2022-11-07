import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodReview from './FoodReview';
import FoodServiceDetailes from './FoodServiceDetailes';
import ReviewForm from './ReviewForm';

const FoodDetailes = () => {
    const foodData= useLoaderData()
    return (
        <div>
            <FoodServiceDetailes foodData={foodData}/>
            <FoodReview/>
            <ReviewForm/>
        </div>
    );
};

export default FoodDetailes;