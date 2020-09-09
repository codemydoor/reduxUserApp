import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";

const UserInfo = ({ name, email, gen, id, removeUser }) => {
  const handleClick = () => {
    removeUser(id);
  };
  return (
    <div>
      <div className="infos">
        <h3>Name:{name}</h3>
        <p>Email:{email}</p>
        <h3>Gen{gen}</h3>
        <button onClick={handleClick}>Remove User</button>
        <Link to={`/edit/${id}`}>Edit User</Link>
      </div>
    </div>
  );
};

export default UserInfo;
