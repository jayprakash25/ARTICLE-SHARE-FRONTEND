import React from "react";
import Data from "../../Data/Data";
export default function TopHeadlines({ SearchTerm }) {
  return (
    <div className="flex items-center justify-start grid-cols-4 gap-6 my-5 overflow-x-scroll md:grid scroll-smooth md:overscroll-x-none md:place-items-center md:justify-center">
      {Data?.filter((item) => {
        return SearchTerm == null
          ? item
          : item.Category.toLowerCase().includes(SearchTerm);
      }).map((item, i) => {
        return (
          <React.Fragment key={i}>
            <div className=" flex flex-col shadow-2xl shadow-slate-200 duration-300 ease-in-out border-[1px] rounded-lg border-gray-300 justify-center space-y-2 cursor-pointer">
              {/* Post image */}
              <img
                src={item.image}
                alt={item.image}
                className="mx-auto max-w-[60vw] md:max-w-[18vw]  rounded-lg"
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
