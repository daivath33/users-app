import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../components/User/User";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/users/${id}`);
  };
  return (
    <>
      <section className="padding-block-900">
        <h2 className="users-heading">PROFILES ({users.length})</h2>
        <div className="users-container">
          {users.map((user) => (
            <User
              key={user.id}
              name={user.name}
              email={user.email}
              address={user.address.city}
              onClick={() => handleClick(user.id)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Users;
