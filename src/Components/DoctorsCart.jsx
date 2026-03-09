import React from "react";

const DoctorsCart = ({DoctorPhoto,Active,DoctorName,DoctorDesignation}) => {
  return (
    <div className=" border-1 border-[#C9D8FF] rounded-[12px]">
        <div className="bg-[#eaefff] h-[273px] w-[273px] mx-auto flex justify-center items-end">
            <img  src={DoctorPhoto} alt="Doctor Photo" />
        </div>
      <div className="px-[14px] pt-3.5 pb-[21px]">
        <span className=" text-[15px] font-Outfit text-[#0FBF00]">
          {Active}
        </span>
        <h3 className="py-[8px] text-[22px] font-Outfit font-medium text-textColor ">
          {DoctorName}
        </h3>
        <h5 className="text-[15px] font-Outfit text-paraColor">
          {DoctorDesignation}
        </h5>
      </div>
    </div>
  );
};

export default DoctorsCart;
