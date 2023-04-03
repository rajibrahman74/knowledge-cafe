import React from "react";

// sideCard components
const SideCard = ({ datas, totalReadTime }) => {
  return (
    <div className="sticky top-0 flex flex-col gap-6">
      <div className="p-[12px] bg-[#6047ec1a] text-center border-2 border-[#6047EC] rounded-md">
        <h2 className="text-[#6047EC] text-[17px] font-bold">
          Spent time on read: {totalReadTime} min
        </h2>
      </div>
      <div className="p-[12px] rounded-md bg-[#f2f2f2]">
        <h3 className="text-[19px] font-bold">
          Bookmarked Blogs: {datas.length}
        </h3>

        {/* map the datas array for get single data */}
        {datas.map((data) => (
          <p className="text-[17px] my-4 p-3 bg-white rounded-md font-bold"
          >
            {data.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideCard;