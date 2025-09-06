import UnlockDescription from "./UnlockDescription";
import UnlockImage from "./UnlockImage";

function Unlock() {
  return (
    <section id="unlock">
      <div className="flex items-center justify-between px-36 max-w-[1440px] mx-auto">
        <UnlockImage />
        <UnlockDescription />
      </div>
    </section>
  );
}

export default Unlock;
