import { SignupForm } from "../components";
import img1 from "../images/img1.png";
export default function CreateAccount() {
  return (
    <>
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div className="hidden md:my-0 md:block">
          <div className="md:mx-16 md:my-5 max-w-md space-y-2.5 md:space-y-3.5">
            <h1 className="text-2xl font-bold text-sky-500">NewsHub</h1>
            <p className="text-slate-500 ">
              Lets get started! Share the Post you like and earn money.Continue
              by creating your account and jump right into your dashboard.
            </p>
          </div>
          <div className="hidden px- py- md:block">
            <img src={img1} alt="" className="max-w-3xl" />
          </div>
        </div>
        <SignupForm />
      </div>
    </>
  );
}
