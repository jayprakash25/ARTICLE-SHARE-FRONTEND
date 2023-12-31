import { RxCross2 } from "react-icons/rx";
import { Logo, MenuListitem } from "./index";
export default function MenuList({ togglemenulist, settogglemenulist, Page }) {
  return (
    <div className="fixed inset-0 z-50 h-full bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="bg-[#031738] animate__animated animate__fadeInLeft text-black h-screen w-[50vw]">
        <div className="flex justify-between px-5 py-7">
          <Logo />
          <RxCross2
            onClick={() => {
              settogglemenulist(!togglemenulist);
            }}
            size={30}
            color="grey"
            className="md:hidden"
            cursor={"pointer"}
          />
        </div>
        <div className="text-center text-white">
          <ul className="px-7 space-y-7">
            <MenuListitem Page={Page} />
          </ul>
        </div>
      </div>
    </div>
  );
}
