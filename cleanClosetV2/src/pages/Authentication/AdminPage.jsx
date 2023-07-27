import { useEffect, useState } from "react";
import axios from "axios";
const AdminPage = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5002/getAdmin')
        .then(res=>setData(res.data))
        .catch(err => console.log(err));
    })
//   const callAboutus = async () => {
//     try {
//       const res = await fetch("http://localhost:5002/getAdmin", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       console.log(data);
//       if (!res.status === 200) {
//         const error = new Error(res.error);
//         throw error;
//       }
//     } catch (err) {
//       console.log(err);
//     }
// };
return (
  <div className="mt-36">
    {
        data.map((user, index)=>{
            return <div key={index}>
                <td>{user.name}</td>
            </div>  
        })
    }
  </div>
);
};

export default AdminPage;
