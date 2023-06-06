import { AiOutlineHome } from "react-icons/ai";
import { TiCompass } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";
import { RiKakaoTalkLine } from "react-icons/ri";
import { MdPolicy } from "react-icons/md";
export default function MenuListitem({ Page }) {
  return (
    <div className="space-y-10 ">
      <div className="flex bg-[#010003]  px-7 py-2.5 w-[40vw] md:w-[15vw] rounded-xl items-center space-x-6 cursor-pointer">
        <AiOutlineHome size={25} color="grey" />
        <p className="font-semibold text-white">{Page}</p>
      </div>
      <div className="flex hover:bg-[#010003]  duration-300 ease-in-out rounded-xl items-center cursor-pointer  space-x-6  px-7 py-2.5 w-[40vw] md:w-[15vw]">
        <TiCompass size={30} color="grey" />
        <p>Explore</p>
      </div>
      <div className="flex hover:bg-[#010003]  duration-300 ease-in-out rounded-xl items-center cursor-pointer  space-x-6  px-7 py-2.5 w-[40vw] md:w-[15vw]">
        <IoIosPeople size={30} color="grey" />
        <p>About</p>
      </div>
      <div className="flex  hover:bg-[#010003]  duration-300 ease-in-out rounded-xl items-center cursor-pointer px-7 py-2.5 w-[40vw] md:w-[15vw] space-x-6 ">
        <RiKakaoTalkLine size={30} color="grey" />
        <p>Contact</p>
      </div>
      <div className="flex hover:bg-[#010003] duration-300 ease-in-out rounded-xl items-center cursor-pointer  px-7 py-2.5 w-[50vw] md:w-[15vw] space-x-6 ">
        <MdPolicy size={30} color="grey" />
        <p>Private Policy</p>
      </div>
    </div>
  );
}
