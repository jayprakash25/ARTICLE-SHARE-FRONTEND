import {MdPaid} from "react-icons/md"

export default function UserDashBoardBox({ Name }) {
  const UserData = [
    {
      Views: "300",
      Tittle: "Views",
      logo: <MdPaid/>
    },
    {
      Views: "300",
      Tittle: "Total Earnings",
      logo: <MdPaid/>
    },
    {
      Views: "300",
      Tittle: "Post Shared",
      logo: <MdPaid/>
    },
    {
      Views: "300",
      Tittle: "Total Views",
      logo: <MdPaid/>
    },
  ];

  return (
    <>
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-y-5 my-11 md:gap-x-6 lg:gap-x-14 place-items-center md:mx-24">
        {UserData.map((item, i) => {
          return (
            <>
              <div
                key={i}
                className={` flex flex-col-reverse text-center  w-56 h-auto py-4 shadow-md cursor-pointer rounded-md bg-white `}
              >
                <h1 className="text-xl font-semibold pt-2">{item.Views}</h1>
                <div className="flex items-center justify-center space-x-2">
                {/* <MdPaid/> */}
                {item.logo}
                <h2 className="text-lg ">{item.Tittle}</h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
