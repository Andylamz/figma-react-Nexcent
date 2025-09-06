function Links() {
  return (
    <div className="flex gap-[30px]">
      {/* first list */}
      <div className="flex flex-col gap-6">
        <h4 className="text-white font-semibold text-xl">Company</h4>
        <ul className="w-40 text-[#F5F7FA] text-sm flex flex-col gap-3">
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>
      </div>
      {/* second list */}
      <div className="flex flex-col gap-6">
        <h4 className="text-white font-semibold text-xl">Support</h4>
        <ul className="w-40 text-[#F5F7FA] text-sm flex flex-col gap-3">
          <li>Help center</li>
          <li>Term of service</li>
          <li>Legal</li>
          <li>Privacy policy</li>
          <li>Status</li>
        </ul>
      </div>
      {/* second list */}
      <div className="flex flex-col gap-6">
        <h4 className="text-white font-semibold text-xl">Stay up to date</h4>
        <div className="w-[255px] h-10 bg-[#515B60] rounded-lg flex justify-between items-center px-3">
          <input
            type="text"
            className="outline-none text-sm text-[#D9DBE1]"
            placeholder="Your email address"
          />
          <div className="w-[16.5px]">
            <img src="/send.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
