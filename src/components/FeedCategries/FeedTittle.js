export default function FeedTittle({Tittle,styles}) {
  return (
    <>
      <h1 className={`text-[#434e53] font-semibold text-3xl my-3.5 ${styles}`}>
        {Tittle}
      </h1>
    </>
  );
}
