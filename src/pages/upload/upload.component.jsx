import React from "react";
import "./upload.styles.scss";

const Upload = () => {
  return (
    <div className="upload">
      <h2 className="upload-title">Last opp din drittleilighet!</h2>
      <h3 className="upload-caption">
        Hjelp andre med å slippe å bo i en drittleilighet.
      </h3>
      <form className="upload-form">
        <input
          type="text"
          placeholder="Utleier"
          className="upload-form-input"
        />
        <input
          type="text"
          placeholder="Adresse"
          className="upload-form-input"
        />
        <input type="text" placeholder="By" className="upload-form-input" />
        <textarea className="upload-form-textarea">
          Fortell litt om leiligheten.
        </textarea>
        <button className="upload-form-button">Last Opp</button>
      </form>
    </div>
  );
};

export default Upload;
