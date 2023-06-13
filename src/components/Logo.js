import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <h1 className="text-2xl font-bold text-white md:text-3xl">
        News
      </h1>
    </Link>
  );
}
