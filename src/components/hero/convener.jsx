import React from "react";
import "./convener.css";
const convener = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Convener</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/S.-Gurvinder-Singh-Bahra.jpg"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> S. Gurvinder Singh Bahra</h1>

            <h1 className="convener-position">
              Hon'ble Chancellor,{" "}
              Rayat Bahra University
            </h1>
          </div>

          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/S.K. Bansal.jpeg"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> S.K. Bansal</h1>

            <h1 className="convener-position">
              Pro Vice Chancellor,{" "}
              Rayat Bahra University
            </h1>
          </div>

          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/Gurdansh Singh.jpeg"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> S.K. Bansal</h1>

            <h1 className="convener-position">
              Registrar,{" "}
              Rayat Bahra University
            </h1>
          </div>

          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/Sakshi mehta.jpeg"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> S.K. Bansal</h1>

            <h1 className="convener-position">
              Director Alpha School of,{" "}
              Rayat Bahra University
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default convener;
