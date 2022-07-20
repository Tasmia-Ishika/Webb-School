import React, { useEffect, useRef, useState } from "react";
import useAdmission from "../../../Hooks/useAdmission";
import AdmissionCard from "./AdmissionCard";

const Admission = () => {
  const [admission, setAdmission] = useAdmission();

  return (
    <div id="admission" className="" >
      <div className="mb-10">
      <h1 className="text-3xl font-semibold text-center">
        Admission Preparation
      </h1>
      <p className="text-xl text-center text-gray-500">
        Prepare for your dream university
      </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:mx-8 mb-10">
        {admission.map((admission) => (
          <AdmissionCard
            key={admission._id}
            admission={admission}
          ></AdmissionCard>
        ))}
      </div>
      <div className="flex justify-center">
        <button class="btn btn-wide btn-primary text-white">
          Explore All Programs
        </button>
      </div>
    </div>
  );
};

export default Admission;
