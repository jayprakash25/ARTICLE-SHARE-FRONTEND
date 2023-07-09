import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ReadFull() {
  // const User = JSON.parse(localStorage.getItem("User"));
  const [currentView, setcurrentView] = useState(0);
  const { jwt, id } = useParams();

  const PostView = async () => {
    try {
     const response =  await fetch(`/shared-post/${id}/view`, {
        method: "GET",
      });

      if(response.ok){
        const updatedPost = await response.json();
        setcurrentView(updatedPost.Views);
      }else{
        console.log("Failed to view count");
      }
      // fetch the db with jwt and Post the view of given image id
      // Simple eg:
      // setcurrentView(currentView + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PostView();
  }, [id]);

  return (
    <>
      <h1>
        {currentView}
        Readfull {jwt} {id}
      </h1>
    </>
  );
}
