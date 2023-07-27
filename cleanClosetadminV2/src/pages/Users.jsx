import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5002/getAddedNgo")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="ngo">
      <h1>Total Added NGO</h1>
      <div className="AddedNgoMainCard">
        {data.map((user, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">{user.ngoname}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {user.ngoType}
                </h6>
                <p className="card-text">{user.NgoAddress}</p>
                <p className="card-text">{user.ngodescription}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Users;
{
  /* <div key={index}>
            <td>{user.name}</td>
          </div> */
}
