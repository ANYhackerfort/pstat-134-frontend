// ReadMePanel.tsx
import "./ReadMePanel.css";

const ReadMePanel = () => {
  return (
    <div className="readme-panel">
      <h1 className="readme-title">README</h1>

      <p className="readme-text">
        This is a dummy README panel.
        <br />
        <br />
        Put documentation, onboarding, instructions, markdown rendering,
        examples, or guides here.
        <br />
        <br />
        This section is independently scrollable.
      </p>
    </div>
  );
};

export default ReadMePanel;