import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import {
  UserDashBoardDropdown,
  UserDashBoardBox,
  UserSharedPost,
  DasboardMenu,
  MenuList,
  BarGraph,
  UploadUserImage,
} from "../components";
import { useState } from "react";
import { FeedTittle } from "../components/FeedCategries";
export default function UserDashBoard() {
  const { jwt, Name } = JSON.parse(localStorage.getItem("User"));
  const [dropdown, setdropdown] = useState(false);
  const [togglemenulist, settogglemenulist] = useState(false);
  const [Uploadimagemodel, setUploadimagemodel] = useState(false);
  console.log(jwt);

  return (
    <div className="bg-[#f8fafe] lg:ml-20">
      {/* Navbar */}
      <nav className="flex justify-between px-4 py-4 md:px-8 md:justify-between">
        <FeedTittle
          Tittle={`${Name} DashBoard`}
          styles={`  lg:pl-36 hidden md:block `}
        />
        <AiOutlineMenu
          size={30}
          color="grey"
          className="md:hidden"
          cursor={"pointer"}
          onClick={() => {
            settogglemenulist(!togglemenulist);
          }}
        />
        <div>
          <MdOutlineAccountCircle
            cursor={"pointer"}
            size={"34"}
            color={"grey"}
            onClick={() => {
              setdropdown(!dropdown);
            }}
          />
        </div>
      </nav>
      {/* User Dropdown Menu */}
      {dropdown ? (
        <UserDashBoardDropdown
          Uploadimagemodel={Uploadimagemodel}
          setUploadimagemodel={setUploadimagemodel}
        />
      ) : null}
      {/* User DashBoard */}
      <DasboardMenu Page={"My DashBoard"} />
      <div
        className={`px-8 space-y-10   lg:ml-36 ${dropdown ? "-my-24" : null}`}
      >
        <FeedTittle Tittle={`${Name} DashBoard`} styles={" md:hidden"} />
        {/* DashBoard Boxes */}
        <UserDashBoardBox />
        {/* DashBoard Graph */}
        <BarGraph dropdown={dropdown} />
        {/* DashBoard Shared Post */}
        <UserSharedPost />
      </div>
      {/* Side Bar Mobile */}
      {togglemenulist ? (
        <MenuList
          togglemenulist={togglemenulist}
          settogglemenulist={settogglemenulist}
          Page={"Dashboard"}
        />
      ) : null}
      {/* User image Uploading Model */}
      {Uploadimagemodel ? (
        <UploadUserImage
          Uploadimagemodel={Uploadimagemodel}
          setUploadimagemodel={setUploadimagemodel}
        />
      ) : null}
    </div>
  );
}
