import CalendarDescription from "./CalendarDescription";
import CalendarImage from "./CalendarImage";

function Calendar() {
  return (
    <section id="calendar" className="mt-12">
      <div className="flex items-center justify-between max-w-[1440px] px-[144px] mx-auto ">
        <CalendarImage />
        <CalendarDescription />
      </div>
    </section>
  );
}

export default Calendar;
