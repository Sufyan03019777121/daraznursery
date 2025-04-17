import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import nursery from "../../assets/images/plant1.jpeg"

const ImageCards = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="container text-center mt-5">
        <h1 >DARAZNURSERY</h1>
        <img
          src={nursery}
          className="rounded-3 card-img-top"
          alt="Selected"
          style={{ height: "auto", objectFit: "cover" }}
        />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              {image1 && (
                <img
                  src={image1}
                  className="card-img-top"
                  alt="Selected"
                  style={{ height: "auto", objectFit: "cover" }}
                />
              )}
              <div className="card-body text-center">
                <h5 className="card-title">plant 1</h5>
                <h5>RS 2500</h5>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setImage1)}
                  className="form-control mt-3"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              {image2 && (
                <img
                  src={image2}
                  className="card-img-top"
                  alt="Selected"
                  style={{ height: "auto", objectFit: "cover" }}
                />
              )}
              <div className="card-body text-center">
                <h5 className="card-title">plant 2</h5>
                <h5>RS 2500</h5>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setImage2)}
                  className="form-control mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCards;
