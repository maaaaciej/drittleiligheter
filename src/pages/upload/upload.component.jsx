import React, { useState } from "react";
import { storage, db } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

import "./upload.styles.scss";

const Upload = () => {
  const [caption, setCaption] = useState("");
  const [renter, setRenter] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    e.target.files[0] ? setImage(e.target.files[0]) : console.log("e");
  };
  const history = useHistory();
  const handleUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption,
              renter,
              image: url,
              city,
              adress,
            });

            setCaption("");
            setRenter("");
            setAdress("");
            setCity("");
            setImage(null);
            history.push("/");
          });
      }
    );
  };

  return (
    <div className="upload">
      <form className="upload-form">
        <h2 className="upload-title">Last opp din drittleilighet!</h2>
        <h3 className="upload-caption">
          Hjelp andre med å slippe å bo i en drittleilighet.
        </h3>
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
          placeholder="Fortell litt om leiligheten"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <input type="file" onChange={handleImageChange} />

        <button onClick={handleUpload}>Last Opp</button>
      </form>
    </div>
  );
};

export default Upload;
