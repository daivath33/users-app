import { useNavigate } from "react-router-dom";
import { MdOutlineNotStarted } from "react-icons/md";
import Button from "../components/UI/Button/Button";
import Image from "./../images/company.jpg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/users");
  };

  return (
    <>
      <section className="padding-block-700">
        <div className="container">
          <div className="even-columns">
            <div className="left">
              <div className="sec-heading">
                <h2 className="heading-first fs-primary-heading fw-bold">
                  Welcome To Our Company
                </h2>
                <h1 className="heading-second fs-primary-heading fw-bold">
                  Profile 2023
                </h1>
              </div>
              <div className="sec-content">
                <h4 className="sec-content-heading fw-bold">
                  Lorem psumitamet
                </h4>
                <p>
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <Button onClick={handleNavigate}>
                  <div className="btn-content">
                    Get Started <MdOutlineNotStarted className="btn-icon" />
                  </div>
                </Button>
              </div>
            </div>
            <div className="right">
              <img src={Image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
