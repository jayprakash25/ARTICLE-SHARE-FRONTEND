import { AiOutlineEye } from "react-icons/ai";
import { FeedTittle } from "./FeedCategries";
import React from "react";

export default function UserSharedPost() {
  const Data = [
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit",
      Category: "Technology",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit",
      Category: "Technology",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit",
      Category: "Technology",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit",
      Category: "Technology",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit",
      Category: "Technology",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit",
      Category: "Sports",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
  ];
  return (
    <>
      <FeedTittle Tittle={`Shared Post's`} styles={"md:text-start lg:pl-20"} />
      <div className="grid gap-5 px-6 pb-4 md:grid-cols-2 md:grid md:px-14 ">
        {Data.map((item, i) => {
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
                    Read more
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
