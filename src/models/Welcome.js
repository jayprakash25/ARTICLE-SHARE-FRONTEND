import "animate.css";
import { GiNewShoot } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Welcome({ setWelcomemodel }) {
  return (
    <div className="fixed inset-0 z-50 h-full bg-black bg-opacity-30 backdrop-blur-md">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 trasform">
        <div className="p-6 text-center bg-white w-[90vw] md:max-w-[35vw] animate__animated animate__fadeIn">
          <GiNewShoot size={75} className="mx-auto" color="#d6d7fa" />
          <div className="space-y-7 my-3.5">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#434e53]">
              Welcome to NewsHub
            </h1>
            <p className=" text-[#434e53]">
              Lets get started!,Share the Post you like and earn money.Continue
              by creating your account and jump right into your dashboard.
            </p>
            <div className="space-x-6 text-sm font-semibold">
              <button
                className="bg-[#f2f5f4] px-6 py-3 rounded-full"
                onClick={() => {
                  setWelcomemodel(false);
                }}
              >
                No Thanks
              </button>
              <Link to={"/sign-up"}>
                <button className="px-6 py-3 text-white bg-blue-500 rounded-full">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
