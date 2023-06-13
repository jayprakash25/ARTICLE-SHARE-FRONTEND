import {
  TopHeadlines,
  FeaturedNews,
  FeedTittle,
  // Categories,
} from "./FeedCategries";
export default function Feed({ SearchTerm }) {
  return (
    <div className="flex flex-col justify-center px-8 ">
      {/* <FeedTittle Tittle={"Search by Categories"} />
      <Categories /> */}
      <FeedTittle Tittle={"Top Headlines"} />
      <TopHeadlines SearchTerm={SearchTerm} />
      <FeedTittle Tittle={"Featured News"} />
      <FeaturedNews SearchTerm={SearchTerm} />
    </div>
  );
}
