import About from "./About";
import Links from "./Links";

function Footer() {
  return (
    <div className=" bg-[#263238]">
      <div className="flex justify-between gap-[125px] max-w-[1440px] py-16 px-[165px]  mx-auto">
        <About />
        <Links />
      </div>
    </div>
  );
}

export default Footer;
