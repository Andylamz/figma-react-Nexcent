import CommunityDescription from "./CommunityDescription";
import CommunityHeader from "./CommunityHeader";

function Community() {
  return (
    <section id="community" className="max-w-[1440px] mx-auto">
      <CommunityHeader />
      <CommunityDescription />
    </section>
  );
}

export default Community;
