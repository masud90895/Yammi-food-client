import React, { useContext, useEffect, useState, Fragment } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyReview = () => {
  const [reviewData, setReviewData] = useState([]);
  const [reload, setReload] = useState(false);
  const [ediedData, setEdiedData] = useState("");
  const { user } = useContext(AuthContext);
  console.log(ediedData);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete Review!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assinment11.vercel.app/review${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setReload(!reload);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
console.log(reviewData);
  // maybe error
  useEffect(() => {
    document.title = "My Reviews";
    if (user?.email) {
      fetch(`https://assinment11.vercel.app/myReview?email=${user?.email}`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setReviewData(data?.data);
          }
        });
    }
  }, [reload, user?.email]);
  return (
    <>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Reviews
            </p>
            <div>
              <Link to="../foodservice">
                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 text-black border-2 hover:bg-yellow-500 border-yellow-500 rounded">
                  New Reviews
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">User info</th>
                <th className="font-normal text-left pl-12">Category</th>
                <th className="font-normal text-left pl-12">Reviews</th>
                <th className="font-normal text-left pl-20">Edit</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {reviewData.length > 0 ? (
                <>
                  {reviewData?.map((data) => (
                    <tr
                      key={data._id}
                      className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                    >
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-10 h-10">
                            <img
                              className="w-full h-full"
                              src={data?.image}
                              alt=""
                            />
                          </div>
                          <div className="pl-4">
                            <p className="font-medium">{data?.userName}</p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              {data?.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-12">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {data?.category}
                        </p>
                      </td>
                      <td className="pl-12 ">
                        <p className="font-medium">{data?.review}</p>
                      </td>
                      <td className="pl-20">
                        <div className="font-medium">
                          <Link to={`../myReview/${data?._id}`}>
                            <button className="btn cursor-pointer hover:text-yellow-500 hover:border-b hover:border-yellow-500">
                              Edit
                            </button>
                          </Link>{" "}
                          <button
                            className="btn hover:border-b hover:border-yellow-500 hover:text-yellow-500"
                            onClick={() => handleDelete(data?._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr className="w-full">
                  <td className="text-2xl w-full font-bold text-center">
                    No reviews were added
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyReview;
