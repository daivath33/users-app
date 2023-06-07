import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaRegAddressCard, FaStreetView } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Image from "./../images/user.jpg";
import "./UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {user && (
        <section className="padding-block-900">
          <h1 className="user-details-heading fw-bold">{user.name} Profile</h1>

          <div className="user-details">
            <div className="even-columns">
              <div className="left">
                <img src={Image} alt="" />
              </div>

              <div className="details-box">
                <div className="details-box-heading">
                  <p className="user-name fw-bold">{user.name}</p>
                  <p className="fw-bold">Employee of "{user.company.name}"</p>
                  <p className="fw-bold">{user.company.catchPhrase}</p>
                </div>

                <div className="user-contacts">
                  <div className="details-inline">
                    <FaRegAddressCard />
                    <p>City:</p>
                    <p>{user.address.city} </p>
                  </div>
                  <div className="details-inline">
                    <FaStreetView />
                    <p>Adress:</p>
                    <p>{user.address.street + " " + user.address.suite} </p>
                  </div>
                  <div className="details-inline">
                    <HiOutlineMail />
                    <p>Email:</p>
                    <p>{user.email}</p>
                  </div>
                  <div className="details-inline">
                    <HiOutlinePhone />
                    <p>Phone:</p>
                    <p>{user.phone}</p>
                  </div>
                  <div className="details-inline">
                    <CgWebsite className="details-icon" />
                    <p>Website:</p>
                    <p>{user.website}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default UserDetails;
