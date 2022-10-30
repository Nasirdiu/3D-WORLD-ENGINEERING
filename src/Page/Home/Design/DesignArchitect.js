import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Design from "./Design";

const DesignArchitect = () => {
  const [design, setDesign] = useState([]);
  useEffect(() => {
    fetch("design.json")
      .then((res) => res.json())
      .then((data) => setDesign(data));
  }, []);

  return (
    <div className="bg-base-100 px-5 py-14 mx-auto">
      <h1 className="text-3xl font-bold text-center text-rose-700 uppercase">
        Design Architect{" "}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-10">
        {design
          .map((des) => <Design key={des.id} des={des}></Design>)
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default DesignArchitect;
