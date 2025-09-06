import Login from "./Login";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <section id="header" className="bg-[#F5F7FA]">
      <div className="flex justify-between items-center  py-[30px] pl-[105px] pr-30 max-w-[1440px] mx-auto">
        <Logo />
        <Nav />
        <Login />
      </div>
    </section>
  );
}

export default Header;
