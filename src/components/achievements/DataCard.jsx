function DataCard({ logoNumber, number, unit }) {
  return (
    <div>
      <div className="flex gap-4">
        <img src={`/Icon${logoNumber}.svg`} alt="logo" />
        <div className="flex flex-col w-[191px] justify-center">
          <p className="text-title font-bold text-[28px] leading-[36px]">
            {number}
          </p>
          <p className="text-description leading-[24px]">{unit}</p>
        </div>
      </div>
    </div>
  );
}

export default DataCard;
