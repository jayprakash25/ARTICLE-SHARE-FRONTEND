import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import {
  UserDashBoardDropdown,
  UserDashBoardBox,
  UserSharedPost,
  UserDashBoardSideBar,
  DasboardMenu,
  MenuList,
  BarGraph,
} from "../components";
import { useState } from "react";
import { FeedTittle } from "../components/FeedCategries";
export default function UserDashBoard() {
  // const { jwt, Name } = JSON.parse(localStorage.getItem("User"));
  const [dropdown, setdropdown] = useState(false);
  const [ToogleSidebar, setToogleSidebar] = useState(false);
  const [togglemenulist, settogglemenulist] = useState(false);

  const Notifications = false;
  // console.log(jwt);

  return (
    <div className="bg-[#ECF8F9] lg:ml-20">
      <nav className="flex justify-between px-4 py-6 md:px-8 md:justify-between">
        <FeedTittle
          Tittle={`ELon's DashBoard`}
          styles={` pl-20 hidden md:block `}
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
        <div className="flex items-center space-x-3">
          <div className="flex">
            <AiOutlineBell
              cursor={"pointer"}
              size="34"
              color="gray"
              onClick={() => {
                setToogleSidebar(!ToogleSidebar);
              }}
            />
            {Notifications && (
              <span className="bg-blue-500 text-white w-3 h-3 rounded-full font-bold -translate-x-4 translate-y-0.5" />
            )}
          </div>
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
      {dropdown ? <UserDashBoardDropdown /> : null}
      <DasboardMenu Page={"My DashBoard"} />
      <div className={`m-8 px-8 space-y-14`}>
        <FeedTittle
          Tittle={`Elon's DashBoard`}
          styles={"  md:hidden text-center"}
        />
        <UserDashBoardBox Name= 'Elon' />
        <BarGraph dropdown={dropdown} />
        <UserSharedPost />
      </div>

      {ToogleSidebar && (
        <UserDashBoardSideBar
          ToogleSidebar={ToogleSidebar}
          setToogleSidebar={setToogleSidebar}
        />
      )}
      {togglemenulist ? (
        <MenuList
          togglemenulist={togglemenulist}
          settogglemenulist={settogglemenulist}
          Page={"Dashboard"}
        />
      ) : null}
    </div>
  );
}
