import UpdatesCard from "./UpdatesCard";

function UpdatesBody() {
  return (
    <div className="flex justify-between mt-4">
      <UpdatesCard
        image={1}
        title={"Creating Streamlined Safeguarding Processes with OneRen"}
      />
      <UpdatesCard
        image={2}
        title={
          "What are your safeguarding responsibilities and how can you manage them?"
        }
      />
      <UpdatesCard
        image={3}
        title={"Revamping the Membership Model with Triathlon Australia"}
      />
    </div>
  );
}

export default UpdatesBody;
