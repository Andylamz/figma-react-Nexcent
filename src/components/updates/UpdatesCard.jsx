function UpdatesCard({ image, title }) {
  return (
    <div className="w-92 relative ">
      <div className="w-92">
        <img src={`/updates${image}.png`} alt="image" />
      </div>
      <div className="px-[26px] absolute bottom-0 translate-y-[50%] ">
        <div className="p-4 text-xl rounded-lg bg-[#F5F7FA] shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)]">
          <h4 className="w-[285px] font-bold  text-title mb-4 text-center">
            {title}
          </h4>
          <button className="p-2 text-buttonBg block w-full text-center">
            Readmore →
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdatesCard;
