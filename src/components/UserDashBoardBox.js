export default function UserDashBoardBox({ Name }) {
  const UserData = [
    {
      Views: "300",
      Tittle: "Views",
    },
    {
      Views: "300",
      Tittle: "Total Earnings",
    },
    {
      Views: "300",
      Tittle: "Post Shared",
    },
    {
      Views: "300",
      Tittle: "Total Views",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-y-5 my-11 md:gap-x-6 place-items-center md:flex md:items-center md:mx-24">
        {UserData.map((item, i) => {
          return (
            <>
              <div
                key={i}
                className={`bg-white text-black bg-opacity-90  space-y-2.5 border-[1.2px] w-[47vw]  text-center  px-8 py-10 border-gray-200 shadow-sm cursor-pointer `}
              >
                <h1 className="text-xl ">{item.Views}</h1>
                <h2 className="text-lg font-semibold ">{item.Tittle}</h2>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
