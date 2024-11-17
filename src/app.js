// app.js
import React from "react";
import "./styles.css";

const MicroFrontendApp = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Micro Frontend App</h1>
      <div className="bg-white shadow rounded p-4">
        <p>This is a standalone micro frontend component</p>
      </div>
    </div>
  );
};

// Initialize function to mount the app
window.MicroApp = {
  mount: (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      ReactDOM.render(<MicroFrontendApp />, container);
    }
  },
  unmount: (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      ReactDOM.unmountComponentAtNode(container);
    }
  },
};

export default MicroFrontendApp;
