export default function FeedTittle({Tittle,styles}) {
  return (
    <>
      <h1 className={`text-[#434e53] font-bold text-3xl my-3 -ml-10 md:-ml-0 ${styles}`}>
        {Tittle}
      </h1>
    </>
  );
}
