import UpdatesBody from "./UpdatesBody";
import UpdatesHeader from "./UpdatesHeader";

function Updates() {
  return (
    <section id="updates" className=" mt-12 mb-[196px]">
      <div className="max-w-[1440px] mx-auto px-36">
        <UpdatesHeader />
        <UpdatesBody />
      </div>
    </section>
  );
}

export default Updates;
