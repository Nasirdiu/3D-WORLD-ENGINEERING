import React from "react";
import ScrollToTop from "react-scroll-to-top";
const ReactTopScellorBar = () => {
  return (
    <div>
      <ScrollToTop smooth component={<p style={{ color: "#FF3565"}}>Top</p>} />
    </div>
  );
};

export default ReactTopScellorBar;
