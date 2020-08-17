import React, { useState } from "react";
import "./upload.styles.scss";

const Upload = () => {
  const [caption, setCaption] = useState("Fortell litt om leiligheten");
  const [renter, setRenter] = useState("Utleier");
  const [adress, setAdress] = useState("Adresse");
  const [city, setCity] = useState("By");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    e.target.files[0] ? setImage(e.target.files[0]) : console.log("e");
  };

  const handleUpload = () => {};

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
          value={renter}
          onChange={(e) => setRenter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adresse"
          className="upload-form-input"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        <input
          type="text"
          placeholder="By"
          className="upload-form-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <textarea
          className="upload-form-textarea"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <input type="file" />
        <button className="upload-form-button" onChange={handleImageChange}>
          Last Opp
        </button>
      </form>
    </div>
  );
};

export default Upload;
