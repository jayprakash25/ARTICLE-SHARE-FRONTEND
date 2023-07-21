import {
  AiOutlineArrowRight,
} from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Data from "../../Data/Data";
import React from "react";
export default function FeaturedNews({ SearchTerm }) {
  const User = JSON.parse(localStorage.getItem("User"));

  const shareSave = async (Postid, image, Tittle, Category) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "NewsHub Post",
          text: "Hey Check out the blog from NewsHub",
          url: `https://localhost:3000/blog/${User?.jwt}/${Postid}`,
        });
      }

      //   // Send a request to the server to increment the view count
      //   await fetch(`/blog/${User?.jwt}/${Postid}`, {
      //     method: "GET",
      //   });
      //   // await fetch(`/shared-post/${Postid}/view/`);

      //Sent Request to the server to save the post...
      await fetch("/shared-post", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          Userjwt: User.jwt,
          Postid,
          image,
          Tittle,
          Category,
        }),
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 my-5 md:w-auto md:overscroll-x-none md:grid md:grid-cols-2 lg:grid-cols-3 md:place-items-center md:justify-center ">
        {Data?.filter((item) => {
          return SearchTerm == null
            ? item
            : item.Category.toLowerCase().includes(SearchTerm);
        }).map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col justify-center p-4 space-y-2 duration-300 ease-in-out bg-white border-gray-300 shadow-2xl cursor-pointer shadow-slate-200 rounded-2xl">
                {/* Post image */}
                <div>
                  <img
                    src={item.image}
                    alt={item.image}
                    className="rounded-lg   md:max-w-[39vw] lg:max-w-[24vw] mx-auto"
                  />
                </div>
                {/* Post description */}
                <div className="pt-4 pl-3">
                  <div>
                    <h1 className="text-[#434e53] my-1 font-bold text-xl">
                      {item.Tittle}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center my-2.5">
                    <h1 className="bg-violet-800 text-white font-semibold p-2.5 text-xs">
                      {item.Category}
                    </h1>
                    <div className="flex items-center justify-end space-x-3.5 py-3">
                      <RiShareForwardLine
                        onClick={() => {
                          shareSave(
                            item.Postid,
                            item.image,
                            item.Tittle,
                            item.Category
                          );
                        }}
                        size={25}
                        color={"gray"}
                        id="share"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end my-2 space-x-2">
                    <p className="text-sm font-semibold text-gray-500">
                      Read more
                    </p>
                    <Link
                      to={`${
                        User?.jwt
                          ? `/blog/${User?.jwt}/${item.Postid}`
                          : `/blog/${item.Postid}`
                      }`}
                    >
                      <AiOutlineArrowRight
                        size={22}
                        color={"gray"}
                        className="duration-300 ease-in-out hover:translate-x-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
