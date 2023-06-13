import { AiOutlineHome } from "react-icons/ai";
import { TiCompass } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";
import { RiKakaoTalkLine } from "react-icons/ri";
import { MdPolicy } from "react-icons/md";
export default function MenuListitem({ Page }) {
  const items = [
    {
      logo: <AiOutlineHome size={30} color="#c8ccd3" />,
      p: Page,
    },
    {
      logo: <TiCompass size={30} color="#c8ccd3" />,
      p: "Explore",
    },
    {
      logo: <IoIosPeople size={30} color="#c8ccd3" />,
      p: "About",
    },
    {
      logo: <RiKakaoTalkLine size={30} color="#c8ccd3" />,
      p: "Contact",
    },
    {
      logo: <MdPolicy size={30} color="#c8ccd3" />,
      p: "Private Policy",
    },
  ];

  return (
    <div className="my-20 space-y-10">
      {items.map((_, index) => {
        return (
          <div
            key={index}
            className="flex hover:bg-[#252e4d] ease-in-out duration-300 p-3 rounded-lg items-center space-x-4 cursor-pointer "
          >
            {_.logo}
            <p className="font-semibold text-gray-300 hover:flex">{_.p}</p>
          </div>
        );
      })}
    </div>
  );
}
