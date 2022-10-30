import React, { useEffect, useState } from "react";
import DesignAll from "./DesignAll";

const CompeleateDesign = () => {
    const[designAll,setDesignAll]=useState([]);
    useEffect(()=>{
        fetch('complete.json')
        .then(res=>res.json())
        .then(data=>setDesignAll(data))
    })
   
  return (
    <div className="bg-base-100 px-5 py-14 mx-auto">
      <h1 className="text-3xl font-bold text-center text-rose-700 uppercase">
        complete Design 
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-10">
        {
            designAll.map(design=>(<DesignAll key={design.id} design={design}></DesignAll>))
        }
      </div>
    </div>
  );
};

export default CompeleateDesign;
