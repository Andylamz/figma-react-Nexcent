import DataCard from "./DataCard";

function ArchievementsData() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-[30px]">
        <DataCard logoNumber={1} number={"2,245,341"} unit="Members" />
        <DataCard logoNumber={2} number={"46,328"} unit="Clubs" />
      </div>
      <div className="flex gap-[30px]">
        <DataCard logoNumber={3} number={"828,867"} unit="Event Bookings" />
        <DataCard logoNumber={4} number={"1,926,436"} unit="Payments" />
      </div>
    </div>
  );
}

export default ArchievementsData;
