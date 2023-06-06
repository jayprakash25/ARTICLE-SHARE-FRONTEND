import { Logo, MenuListitem } from "./index";

export default function DasboardMenu({ Page }) {
  return (
    <>
      <aside>
        <div className="fixed bottom-0 left-0 hidden px-7 bg-[#292a3d] text-white shadow-sm top-0 md:block">
          <Logo />
          <ul className="flex justify-between py-10 gap-x-10">
            <MenuListitem Page={Page} />
          </ul>
        </div>
      </aside>
    </>
  );
}
// 292d3d