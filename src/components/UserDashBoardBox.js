import { MdPaid } from "react-icons/md";

export default function UserDashBoardBox() {
  const UserData = [
    {
      Views: "300",
      Tittle: "Views",
      logo: <MdPaid />,
    },
    {
      Views: "300",
      Tittle: "Total Earnings",
      logo: <MdPaid />,
    },
    {
      Views: "300",
      Tittle: "Post Shared",
      logo: <MdPaid />,
    },
    {
      Views: "300",
      Tittle: "Total Views",
      logo: <MdPaid />,
    },
  ];

  return (
    <>
      <div className="grid items-center justify-center grid-cols-2 gap-5 lg:flex ">
        {UserData.map((item, i) => {
          return (
            <>
              <div
                key={i}
                className={` flex flex-col-reverse lg:w-[15vw] p-6 text-center shadow-2xl shadow-slate-200 cursor-pointer rounded-md bg-white `}
              >
                <h1 className="pt-2 text-xl font-semibold">{item.Views}</h1>
                <div className="flex items-center justify-center space-x-2">
                  {/* <MdPaid/> */}
                  {item.logo}
                  <h2 className="text-lg">{item.Tittle}</h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
