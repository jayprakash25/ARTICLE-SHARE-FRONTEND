import { Logo, MenuListitem } from "./index";

export default function DasboardMenu({ Page }) {
  return (
    <>
      <aside>
        <div className="fixed  bottom-0 left-0 hidden px-7 py-5 bg-[#031738] text-white shadow-sm top-0  lg:block">
          <Logo />
          <ul className="flex justify-between gap-x-10">
            <MenuListitem Page={Page} />
          </ul>
        </div>
      </aside>
    </>
  );
}