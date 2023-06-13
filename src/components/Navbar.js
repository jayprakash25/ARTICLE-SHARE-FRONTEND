import { AiOutlineMenu } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MenuList, DasboardMenu } from "./";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
export default function Navbar({ SearchTerm, setSearchTerm }) {
  const [togglemenulist, settogglemenulist] = useState(false);

  const User = JSON.parse(localStorage.getItem("User"));

  {
    /* Navbar  */
  }
  return (
    <>
      <nav className="flex items-center justify-between p-4 md:justify-end md:items-start">
        <div>
          {/* Toggling menu bar */}
          {togglemenulist ? null : (
            <>
              {/* Desktop Menulist */}
              <DasboardMenu Page={"Home"} />
              <AiOutlineMenu
                onClick={() => {
                  settogglemenulist(!togglemenulist);
                }}
                size={30}
                color="grey"
                className="md:hidden"
                cursor={"pointer"}
              />
            </>
          )}
          {/* Mobile Menu List */}
          {togglemenulist ? (
            <MenuList
              togglemenulist={togglemenulist}
              settogglemenulist={settogglemenulist}
              Page={"Home"}
            />
          ) : null}
        </div>
        <div className="flex items-center md:mr-4">
          <HiMagnifyingGlass
            size={21}
            className="translate-x-8"
            color="grey"
            cursor={"pointer"}
          />
          <input
            type="text"
            value={SearchTerm}
            className="outline-none rounded-lg border-[1px] border-gray-200 px-10 w-[70vw] md:w-[30vw] py-2.5"
            placeholder="Search anything"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <div className="md:translate-y-1 md:block">
          <Link to={`${User ? `/dashboard` : "/sign-up"}`}>
            {User ? (
              <MdOutlineAccountCircle size={34} color={"grey"} />
            ) : (
              <button
                className={` bg-violet-800  text-sm 
            text-white px-7 font-semibold rounded-full py-2 hover:brightness-90`}
              >
                Sign up
              </button>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}
