import ArchievementsData from "./ArchievementsData";
import ArchievementsHeading from "./ArchievementsHeading";

function Archievements() {
  return (
    <section id="archievements" className="bg-[#F5F7FA] mt-12">
      <div className="flex justify-between item-center py-16 px-36 max-w-[1440px] mx-auto">
        <ArchievementsHeading />
        <ArchievementsData />
      </div>
    </section>
  );
}

export default Archievements;
