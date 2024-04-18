const Chip = ({ data }) => {
  return (
    <div className="md:text-[10px] text-[8px] text-center bg-[#f7f1de] md:font-[600] font-[500] rounded  md:px-2 md:py-[1px] text-[#b59a50]">
      {data}
    </div>
  );
};

export default Chip;
