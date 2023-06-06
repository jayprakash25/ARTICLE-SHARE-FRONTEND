import { RxCross2 } from "react-icons/rx";

export default function UserDashBoardSideBar({
  ToogleSidebar,
  setToogleSidebar,
}) {
  const Notifications = [
    {
      Tittle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit",
    },
    {
      Tittle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit",
    },
  ];

  return (
    <>
      <aside className="fixed inset-0 right-0 z-50 h-full bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="max-w-[60vw] md:max-w-[20vw] h-screen bg-white p-5">
          <div className="flex justify-end">
            <RxCross2
              size={30}
              color="grey"
              cursor={"pointer"}
              onClick={() => {
                setToogleSidebar(!ToogleSidebar);
              }}
            />
          </div>
          <div className="">
            {Notifications.map((item) => {
              return (
                <div className="py-4 space-y-1">
                  <h1>{item.Tittle}</h1>
                  <p>{item.Para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
