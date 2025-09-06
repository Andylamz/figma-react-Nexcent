function CommunityCard({ number, text }) {
  return (
    <div className="shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] px-8 py-6">
      <div className="mb-2">
        <img src={`/community${number}.png`} />
      </div>
      <div className="text-center w-[251px] text-description text-sm ">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CommunityCard;
