import "./TwoPanelLayout.css";

import FormPanel from "./panels/FormPanel";
import ReadMePanel from "./panels/ReadMePanel";

const TwoPanelLayout = () => {
  return (
    <div className="layout-container">
      <ReadMePanel />
      <FormPanel />
    </div>
  );
};

export default TwoPanelLayout;