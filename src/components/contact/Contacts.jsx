import "./ContactsStyles.scss";
import { FaHeadphones, FaMapMarker, FaPhone } from "react-icons/fa";
import { Form } from "./Form";
import { Map } from "./Map";

const Contacts = () => {
  return (
    <div className="main-wrapper">
        <div className="content">
        <div className="contact-wrapper">
          <div className="info">
            <h3>CONTACT INFO</h3>
            <div>
              <FaMapMarker className="fafa" />
              <span>Address</span>
            </div>
            <p>160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
            <div>
              <FaPhone className="fafa" />
              <span>Phone</span>
            </div>
            <p>125-711-811125-668-886</p>
            <div>
              <FaHeadphones className="fafa" />
              <span>Support</span>
            </div>
            <p>Support.photography@gmail.com</p>
          </div>
          <Form />
        </div>
        <Map />
        </div>
    </div>
  );
};

export { Contacts };
