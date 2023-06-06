import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignupForm() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    Name: "",
    Age: "",
    Phone: "",
    Address: "",
  });
  const [error, seterror] = useState(false);
  //  Getting user location
  const Getlocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      try {
        const userAddress = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
        fetch(userAddress)
          .then((res) => res.json())
          .then((response) => {
            setuser({ ...user, Address: response.display_name });
          });
      } catch (error) {
        console.log(error);
      }
    });
  };

  // Creating User account
  const Signup = async (e) => {
    e.preventDefault();
    // Post the data in the db
    if (Object.values(user).every((i) => i !== "")) {
      try {
        const res = await fetch("/user/signup", {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        // sucess
        if (res.ok) {
          res.json().then((data) => {
            localStorage.setItem(
              "User",
              JSON.stringify({ jwt: data.jwt, Name: user.Name })
            );
            navigate(`/dashboard`);
          });
        }
      } catch (error) {
        seterror(true);
      }
    } else {
      seterror(true);
    }
  };

  return (
    <>
      <form className="p-10 border-[1px] shadow-md border-slate-200 my-4 md:my-0">
        <div className="mb-8 text-center space-y-2.5 font-semibold text-[#434e53]">
          <h1 className="text-2xl">Welcome</h1>
          {error ? (
            <p className="text-sm  text-red-500">
              There was an error processing your request :(
            </p>
          ) : null}
        </div>
        <div className="flex flex-col my-3 space-y-3">
          <label className="text-slate-500" htmlFor="Name">
            Name
          </label>
          <input
            value={user.Name}
            onChange={(e) => {
              setuser({ ...user, Name: e.target.value });
            }}
            id="Name"
            className="border-[1px] outline-none border-slate-300 px-16  py-2.5"
            type="text"
          />
        </div>
        <div className="flex flex-col my-3 space-y-3">
          <label className="text-slate-500" htmlFor="Age">
            Age
          </label>
          <input
            value={user.Age}
            onChange={(e) => {
              setuser({ ...user, Age: e.target.value });
            }}
            id="age"
            className="border-[1px] outline-none border-slate-300 px-16 py-2.5"
            type="text"
          />
        </div>
        <div className="flex flex-col my-3 space-y-3">
          <label className="text-slate-500" htmlFor="Phone">
            Whatsup Number
          </label>
          <input
            value={user.Phone}
            onChange={(e) => {
              setuser({ ...user, Phone: e.target.value });
            }}
            id="Phone"
            className="border-[1px]  outline-none border-slate-300 px-16  py-2.5"
            type="text"
          />
        </div>
        <div className="flex flex-col my-3 space-y-3">
          <label className="text-slate-500" htmlFor="Address">
            Address
          </label>
          <input
            value={user.Address}
            onClick={Getlocation}
            onChange={(e) => {
              setuser({ ...user, Address: e.target.value });
            }}
            id="Address"
            className="border-[1px] outline-none border-slate-300 px-16 py-2.5"
            type="text"
          />
        </div>
        <div className="flex flex-col my-5 space-y-5">
          <button
            onClick={Signup}
            className="border-[1px] bg-blue-500 text-white font-semibold border-slate-100 px-8 py-3.5"
          >
            Create Account
          </button>
          <p className="max-w-xs text-xs leading-5 text-center">
            By Continuing you will age agreed to all the Rights
          </p>
        </div>
      </form>
    </>
  );
}
