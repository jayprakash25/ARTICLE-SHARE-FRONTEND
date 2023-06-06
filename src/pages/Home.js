import { useEffect, useState } from "react";
import { Feed, Navbar } from "../components";
import { Welcome } from "../models/";
export default function Home() {
  const [Welcomemodel, setWelcomemodel] = useState();

  const [SearchTerm, setSearchTerm] = useState();

  useEffect(() => {
    const hasPopupShown = localStorage.getItem("hasPopupShown");
    if (!hasPopupShown) {
      setWelcomemodel(true);
      localStorage.setItem("hasPopupShown", true);
      const interval = setTimeout(() => {
        setWelcomemodel(true);
      }, 5000);
      return () => clearTimeout(interval);
    }
  }, []);

  return (
    <div className="bg-[#eff0f3]">
      <Navbar SearchTerm={SearchTerm} setSearchTerm={setSearchTerm} />
      <div className="md:ml-72">
        <Feed SearchTerm={SearchTerm} />
      </div>
      {Welcomemodel ? <Welcome setWelcomemodel={setWelcomemodel} /> : null}
    </div>
  );
}
