import { AiOutlineEye } from "react-icons/ai";
import { FeedTittle } from "./FeedCategries";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserSharedPost({Userjwt}) {


  const [SharedPosts, setSharedPosts] = useState([]);

  useEffect(() => {
    axios.get('/shared-post')
      .then(response => {
        setSharedPosts(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch shared posts', error);
      });
  }, []);


  
  return (
    <>
      <FeedTittle Tittle={`Shared Post's`} styles={"md:text-start lg:pl-20"} />
      <div className="grid gap-5 px-6 pb-4 md:grid-cols-2 md:grid md:px-14 ">
        {SharedPosts.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row justify-center bg-white items-center  md:w-auto border-[1.2px] border-gray-200 shadow-sm gap-5 sm:gap-8 p-5"
            >
              <div>
                <img
                  src={item.image}
                  alt="posts"
                  className="max-w-[70vw] sm:max-w-[30vw] md:max-w-[14vw] rounded-lg"
                />
              </div>
              <div className="space-y-5">
                <h1 className="text-sm md:text-base text-[#434e53] font-semibold">
                  {item.Tittle}
                </h1>
                <div className="flex items-center justify-end space-x-4 cursor-pointer">
                  <div className="flex items-center space-x-2 md:mr-0">
                    <p className="text-sm font-bold text-gray-500">{50}</p>
                    <AiOutlineEye cursor={"pointer"} size={25} color="grey" />
                  </div>
                  <p className="text-sm font-semibold text-gray-500">
                    Read More
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
