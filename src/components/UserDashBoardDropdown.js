export default function UserDashBoardDropdown() {
  return (
    <div className="flex justify-end mb-0 -my-5 z-50">
      <div className="border-[1px] space-y-1 text-sm border-gray-200 bg-white rounded-lg shadow-2xl">
        <h1 className=" font-semibold px-6 py-2 hover:bg-[#c8c3e2] hover:text-blue-800  duration-300 ease-in-out cursor-pointer">
          Edit image
        </h1>
        <h1 className=" font-semibold px-6 py-2 hover:bg-[#c8c3e2] hover:text-blue-800  duration-300 ease-in-out cursor-pointer">
          Payments
        </h1>
        <h1 className=" font-semibold px-6 py-2 hover:bg-[#c8c3e2] hover:text-blue-800 duration-300 ease-in-out cursor-pointer">
          Logout
        </h1>
      </div>
    </div>
  );
}
