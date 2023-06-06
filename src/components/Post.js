export default function Post() {
  const Posts = [
    {
      Poster:
        "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquam, illo neque recusandae dolores ab.",
      Category: "TECHNOLOGY",
      Blog: "",
    },
    {
      Poster:
        "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquam, illo neque recusandae dolores ab.",
      Category: "TECHNOLOGY",
      Blog: "",
    },
    {
      Poster:
        "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquam, illo neque recusandae dolores ab.",
      Category: "TECHNOLOGY",
      Blog: "",
    },
    {
      Poster:
        "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquam, illo neque recusandae dolores ab.",
      Category: "TECHNOLOGY",
      Blog: "",
    },
    {
      Poster:
        "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquam, illo neque recusandae dolores ab.",
      Category: "TECHNOLOGY",
      Blog: "",
    },
    {
      Poster:
        "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquam, illo neque recusandae dolores ab.",
      Category: "TECHNOLOGY",
      Blog: "",
    },
    {
      Poster:
        "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquam, illo neque recusandae dolores ab.",
      Category: "TECHNOLOGY",
      Blog: "",
    },
    {
      Poster:
        "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquam, illo neque recusandae dolores ab.",
      Category: "TECHNOLOGY",
      Blog: "",
    },
    {
      Poster:
        "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquam, illo neque recusandae dolores ab.",
      Category: "TECHNOLOGY",
      Blog: "",
    },
  ];

  return (
    <>
      {Posts.map((item, i) => {
        return (
          <>
            <figure key={i} className="max-w-md md:max-w-sm">
              <img src={item.Poster} className="rounded-xl" alt={item.Tittle} />
              <div className="space-y-3.5 py-2 ">
                <p>{item.Category}</p>
                <h1>{item.Tittle}</h1>
                <figcaption>{item.Para}</figcaption>
              </div>
            </figure>
          </>
        );
      })}
    </>
  );
}
