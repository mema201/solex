import React from "react";
import "./contact-form.css"

const Contactform = () => {
  return (
    <div className="container-cform">
      <div className="contact-form">
        <h1>Contactez-nous</h1>
        
        <div style={{ display: "flex", gap: "20px" }}>
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Votre email" />
        </div>
        <textarea placeholder="Votre message"></textarea>
        <br />
        <button>Soumettre</button>
      </div>

      <div className="rendez-vous">
        <h3>Prenez rendez-vous directement</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Prendre rendez-vous</button>
      </div>

      <div className="info-boxes">
        <div className="info-box">
          <h4>Localisation</h4>
          <p>
            Cocody, Boulevard Lorem
            <br />
            Rue 21, lorem ipsum
          </p>
        </div>
        <div className="info-box">
          <h4>Contacts</h4>
          <p>
            27 32 00 00 01
            <br />
            06 04 03 02 01
          </p>
        </div>
        <div className="info-box">
          <h4>Adresse Email</h4>
          <p>Contact@test.com</p>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.069367885414!2d-4.00318778467833!3d5.359951196096267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb83d40f7ed8a6d%3A0x1b45bcda973c91b!2sCocody%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1688454100000!5m2!1sfr!2sci"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contactform;
