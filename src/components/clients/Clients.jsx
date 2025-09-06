import ClientsHeader from "./ClientsHeader";
import ClientsLogo from "./ClientsLogo";

function Clients() {
  return (
    <section id="clients">
      <div className="py-10 px-36 max-w-[1440px] mx-auto">
        <ClientsHeader />
        <ClientsLogo />
      </div>
    </section>
  );
}

export default Clients;
