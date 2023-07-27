import axios from "axios";
import { useEffect, useState } from "react";
import "./Global.css"
const Messages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5002/getDonatedItem")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return <div className="title"> 
  <div className="">
      <h2>Total Added NGO</h2>
      <div className="showMainCard">
        {data.map((user, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">{user.donorName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {user.donorEmail}
                </h6><h6 className="card-subtitle mb-2 text-muted">
                  {user.donorPhonel}
                </h6>
                <p className="card-text">{user.donorAddress}</p>
                <p className="card-text">{user.typeofcloth}</p>
                <p className="card-text">{user.quantity}</p>
                <p className="card-text">{user.condition}</p>
                <p className="card-text">{user.additionalDetails}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div></div>;
};

export default Messages;
