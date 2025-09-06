import CustomersDescription from "./CustomersDescription";
import CustomersImage from "./CustomersImage";

function Customers() {
  return (
    <section id="customers" className="mt-12 bg-[#ABBED166]/40">
      <div className="flex justify-between max-w-[1440px] mx-auto px-36 py-8 items-center gap-[78px]">
        <div className="w-[326px]">
          <CustomersImage />
        </div>
        <CustomersDescription />
      </div>
    </section>
  );
}

export default Customers;
