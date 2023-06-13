import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ReadFull() {
  const User = JSON.parse(localStorage.getItem("User"));
  const [currentView, setcurrentView] = useState(0);
  const { jwt, id } = useParams();

  const PostView = async () => {
    try {
      // fetch the db with jwt and Post the view of given image id
      // Simple eg:
      setcurrentView(currentView + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PostView();
  }, []);

  return (
    <>
      <h1>
        {currentView}
        Readfull {jwt} {id}
      </h1>
    </>
  );
}
