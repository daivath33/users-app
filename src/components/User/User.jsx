import Image from "./../../images/user.jpg";
import "./User.css";

const User = ({ id, name, address, email, onClick }) => {
  return (
    <div className="user-box" onClick={onClick}>
      <div className="user-card">
        <img className="user-img-small" src={Image} alt="" />
        <div className="user-card-det-box">
          <div className="name fw-bold">{name}</div>
          <div className="address fw-bold">{address}</div>
          <div className="email fw-bold">{email}</div>
        </div>
        <button className="btn-view fw-bold">view profile</button>
      </div>
    </div>
  );
};

export default User;
