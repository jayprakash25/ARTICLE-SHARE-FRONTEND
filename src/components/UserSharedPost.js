import { AiOutlineEye } from "react-icons/ai";
import { FeedTittle } from "./FeedCategries";

export default function UserSharedPost() {
  const Data = [
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Category: "Technology",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Category: "Technology",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Category: "Technology",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Category: "Technology",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Category: "Technology",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
    {
      image:
        "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Category: "Sports",
      Likes: "1.2k",
      DisLikes: "1k",
      Time: "2:00",
    },
  ];

  return (
    <>
      <FeedTittle Tittle={`Shared Post's`} styles={" text-center md:text-start lg:pl-20"} />
      <div className="grid md:grid-cols-2 gap-5  px-6 pb-4 md:grid md:px-14 md:gap-7">
        {Data.map((item, i) => {
          return (
            <div
              key={i}
              className="flex  md:max-w-[50vw]  bg-white items-center border-[1.2px] border-gray-200 shadow-sm gap-5 p-4"
            >
              <div>
                <img
                  src={item.image}
                  alt="posts"
                  className="max-w-[40vw] md:max-w-[14vw] rounded-xl"
                />
              </div>
              <div className="space-y-5">
                <h1 className="md:text-lg text-[#434e53] font-semibold">
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
