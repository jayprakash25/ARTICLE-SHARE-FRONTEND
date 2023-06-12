import { AiOutlineHome } from "react-icons/ai";
import { TiCompass } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";
import { RiKakaoTalkLine } from "react-icons/ri";
import { MdPolicy } from "react-icons/md";
export default function MenuListitem({ Page }) {

const items = [
  {
    logo: <AiOutlineHome size={30} color=""/>,
    p: Page
  },
  {
    logo: <TiCompass size={30} color="" />,
    p: "Explore",
  },
  {
    logo: <IoIosPeople size={30} color=""/>,
    p: "About",
  },
  {
    logo: <RiKakaoTalkLine size={30} color=""/>,
    p: "Contact",
  },
  {
    logo: <MdPolicy size={30} color=""/>,
    p: "Private Policy"
  }
]

  return (
   <div className="space-y-8">
    {items.map((_, index) => {
      return(
        <div className="flex cursor-pointer space-x-4 items-center ">
          {_.logo}
          <p className="lg:hidden font-semibold text-white  hover:flex">{_.p}</p>
        </div>
      )
    })}
   </div>
  );
}







/* <div className="space-y-10 ">
<div className="flex bg-[#010003]  px-7 py-2.5 w-[40vw] md:w-[15vw] rounded-xl items-center space-x-6 cursor-pointer">
  <AiOutlineHome size={30} color="" color="" />
  {/* <p className="font-semibold text-white hidden hover:flex">{Page}</p> */
// </div>
// <div className="flex hover:bg-[#010003]  duration-300 ease-in-out rounded-xl items-center cursor-pointer  space-x-6  px-7 py-2.5 w-[40vw] md:w-[15vw]">
//   <TiCompass size={30} color="" />
//   {/* <p>Explore</p> */}
// </div>
