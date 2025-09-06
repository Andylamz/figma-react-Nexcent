import CommunityCard from "./CommunityCard";

function CommunityDescription() {
  return (
    <div className="flex justify-between px-36 mb-10.5">
      <CommunityCard
        number={1}
        text={`Our membership management software provides full automation of membership renewals and payments`}
      />
      <CommunityCard
        number={2}
        text={`Our membership management software provides full automation of membership renewals and payments`}
      />
      <CommunityCard
        number={3}
        text={`Our membership management software provides full automation of membership renewals and payments`}
      />
    </div>
  );
}

export default CommunityDescription;
