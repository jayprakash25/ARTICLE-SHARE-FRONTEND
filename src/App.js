import React, { useEffect } from "react";
import { CreateAccount, Home, UserDashBoard, ReadFull } from "./pages/index";
import { Routes, Route } from "react-router-dom";
export default function App() {
  const User = JSON.parse(localStorage.getItem("User"));
  useEffect(() => {
    // disable right button
    const diableRightClick = (e) => {
      if (e.button === 2) {
        // e.preventDefault();
        return;
      }
    };
    document.addEventListener("contextmenu", diableRightClick);
    return () => document.removeEventListener("contextmenu", diableRightClick);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {User?.jwt ? (
          // if User if logged in
          <>
            <Route path="/dashboard" element={<UserDashBoard />} />
            <Route path={`${User?.jwt ? "/blog/:jwt/:id" : "/blog/:id"}`}  element={<ReadFull />}
            />
          </>
        ) : (
          // If user is not logged in
          <>
            <Route path="/sign-up" element={<CreateAccount />} />
          </>
        )}
      </Routes>
    </>
  );
}
