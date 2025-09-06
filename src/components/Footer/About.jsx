function About() {
  return (
    <div className="flex flex-col gap-10 justify-between text-[#F5F7FA]">
      <div className="w-[191px]">
        <img src="/FooterLogo.png" alt="logo" />
      </div>
      <div className="flex flex-col gap-2 text-sm leading-[20px] text-[#F5F7FA]">
        <p>Copyright © 2020 Nexcent ltd.</p>
        <p>All rights reserved</p>
      </div>
      <div className="flex gap-4">
        <img src="/social1.png" alt="logo" />
        <img src="/social2.png" alt="logo" />
        <img src="/social3.png" alt="logo" />
        <img src="/social4.png" alt="logo" />
      </div>
    </div>
  );
}

export default About;
