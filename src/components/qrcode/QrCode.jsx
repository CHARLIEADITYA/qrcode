import React from "react";
import img from "./image-qr-code.png";
import "./qrcode.css";
const QrCode = () => {
  return (
    <main>
      < div className="components">
        
        <img src={img} alt="no img" />
        <h2>Improve your front-end skills by building projects</h2>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  );
};

export default QrCode;
