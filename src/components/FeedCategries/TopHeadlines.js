import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import img2 from "../../images/img2.png";
import Data from "../../Data/Data";
export default function TopHeadlines({ SearchTerm }) {
  const formatNumber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + "k";
    }
    return number;
  };

  return (
    <div className="flex  overflow-x-scroll scroll-smooth justify-start items-center lg:overscroll-x-none  lg:grid lg:grid-cols-3 my-5  md:place-items-center md:justify-center gap-6 px-10 space-y- ">
      {Data?.filter((item) => {
        return SearchTerm == null
          ? item
          : item.Category.toLowerCase().includes(SearchTerm);
      }).map((item, i) => {
        return (
          <React.Fragment key={i}>
            <div className=" flex bg-white flex-col  hover:shadow-md duration-300 ease-in-out border-[1px] rounded-lg border-gray-300 p-4 justify-center space-y-2 cursor-pointer">
              {/* Post image */}
              <div>
                <img
                  src={item.image}
                  alt={item.image}
                  className="rounded-lg max-w-[60vw] md:max-w-[30vw] lg:max-w-[24vw] mx-auto"
                />
              </div>
              {/* Post description */}
              <div className="pl-3
              pt-4">
                <div className="">
                  <h1 className="text-[#434e53] my-1 font-bold md:text-lg">
                    {item.Tittle}
                  </h1>
                </div>
                {/* <div className="flex items-center my-3 space-x-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <h1 className="font-semibold">
                      {formatNumber(item.Likes)}
                    </h1>
                    <AiOutlineLike
                      cursor={"pointer"}
                      size={25}
                      color="orange"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <h1 className="font-semibold">
                      {formatNumber(item.DisLikes)}
                    </h1>
                    <AiOutlineDislike
                      cursor={"pointer"}
                      size={25}
                      color="grey"
                    />
                  </div>
                </div> */}
                <div className="flex justify-between my-1.5">
                  <h1 className="text-violet-800 font-bold  p-2.5  bg-[#c8c3e2 text-xs">
                    {item.Category}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <BiTimeFive size={23} color={"grey"} />
                    <p className="text-sm font-bold text-gray-500">
                      {item.Time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
