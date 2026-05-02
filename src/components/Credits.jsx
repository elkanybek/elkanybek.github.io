import React from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";

const Credits = () => {
  return (
    <FadeInSection>
      <div id="credits">
        <div className="ending-credits">
          <div>Original design by Gazi Jarin.</div>
          <div>© 2026 Elsana Kanybek</div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Credits;
