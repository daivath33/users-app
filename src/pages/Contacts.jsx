import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsappSquare,
  FaPhone,
} from "react-icons/fa";
import {
  HiPhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div>
      <div className="container">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <HiOutlineLocationMarker className="info-icon" />
                <p> Klaipeda 92 Liepu aleja, LT 99553</p>
              </div>
              <div className="information">
                <HiOutlineMail className="info-icon" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <HiPhone className="info-icon" />
                <p>46-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <Link to="/" className="icon-link">
                  <FaFacebookF />
                </Link>
                <Link to="/" className="icon-link">
                  <FaTwitter />
                </Link>
                <Link to="/" className="icon-link">
                  <FaInstagram />
                </Link>
                <Link href="/" className="icon-link">
                  <FaWhatsappSquare />
                </Link>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Username"
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enmail"
                />
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Phone"
                />
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  placeholder="Message"
                ></textarea>
              </div>
              <input type="submit" value="Send" className="btn fw-bold" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
