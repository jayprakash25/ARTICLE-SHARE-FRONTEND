import { useParams } from "react-router-dom";

export default function ReadFull() {
  const User = JSON.parse(localStorage.getItem("User"));

  const { jwt, id } = useParams();

  const postView = async (id) => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>
        Readfull {jwt} {id}
      </h1>
    </>
  );
}
