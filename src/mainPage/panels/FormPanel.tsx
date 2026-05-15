// FormPanel.tsx
import "./FormPanel.css";

const FormPanel = () => {
  return (
    <div className="form-panel">
      <h1 className="form-title">Dummy Form</h1>

      <div className="form-content">
        <input className="form-input" placeholder="Title" />

        <textarea
          className="form-textarea"
          placeholder="Description"
        />

        <button className="form-button">Submit</button>
      </div>
    </div>
  );
};

export default FormPanel;