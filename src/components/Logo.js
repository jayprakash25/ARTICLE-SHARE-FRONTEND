import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <h1 className="py-6 text-2xl md:text-3xl font-bold text-white mb-7">
        NewsHub
      </h1>
    </Link>
  );
}
