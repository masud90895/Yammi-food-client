import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodReview from './FoodReview';
import FoodServiceDetailes from './FoodServiceDetailes';
import ReviewForm from './ReviewForm';

const FoodDetailes = () => {
    const [reviewData, setReviewData] = useState([]);
    const [reload,setReload]=useState(false)
    const foodData= useLoaderData()

    // maybe error
  useEffect(() => {
    fetch(`http://localhost:5000/review?name=${foodData?.data?.name}`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviewData(data?.data);
        }
      });
  }, [foodData?.data?.name,reload]);
  console.log(reviewData);
    return (
        <div>
            <FoodServiceDetailes foodData={foodData}/>
            <FoodReview reviewData={reviewData}/>
            <ReviewForm foodData={foodData} setReload={setReload} reload={reload}/>
        </div>
    );
};

export default FoodDetailes;