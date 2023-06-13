import React, { useEffect } from "react";
import { CreateAccount, Home, UserDashBoard, ReadFull } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import "animate.css";
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
        <Route path="/dashboard" element={<UserDashBoard />} />

        {User?.jwt ? (
          // if User is logged in
          <>
            <Route
              path={`${User?.jwt ? "/blog/:jwt/:id" : "/blog/:id"}`}
              element={<ReadFull />}
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
