import React from "react";

export default ({onClose}) => {
  return (
    <section className="not-login-modal">
      <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
      <div className="u-modal-container">
          <h1 className="sub-header">You need to be connected</h1>
          <h1 className="sub-header">Please Log-in</h1>
          <button className="btn bg-primary complete-button" onClick={()=>onClose(false)}>Close</button>
      </div>
    </section>
  );
};
