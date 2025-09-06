function HeroDescription() {
  return (
    <div className="flex flex-col w-[657px] justify-center ">
      <div className=" text-[64px] font-semibold">
        <p className="text-[#4D4D4D] leading-[76px]">Lessons and insights</p>
        <p className="text-[#4CAF4F] leading-[76px]">from 8 years</p>
      </div>
      <p className="leading-[24px] text-[#717171] mt-4 mb-8">
        Where to grow your business as a photographer: site or social media?
      </p>
      <div>
        <button className="px-8 py-3.5 rounded-sm bg-[#4CAF4F] text-white">
          Register
        </button>
      </div>
    </div>
  );
}

export default HeroDescription;
