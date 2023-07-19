import React, {useEffect, useState} from 'react';
import DonationDashboardContext from '../../DonationDashboard/DonatationDshboardContext/DonationDashboardContext';
import DonationRegistration from '../DonationRegistration';
import { useNavigate} from 'react-router-dom'
import validate from '../Stages/Vlidation';
export const multiStepContext = React.createContext();

const DonationFormContext = () => {
  
  // const history = useHistory(); 
  // const navigate = useNavigate();
    const [currentStep, setStep] = useState(1);
    const [userdata, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [errors, seterrors] = useState(0);
  const [submit, setissubmit] = useState(false);
  const [infectionType, setInfextionType] = useState();
  const [date,  setDate] = useState();
  const [user ,setUser] = useState();

  const twodate = new Date((+new Date() + 86400000)).toLocaleString("en-US", { day : '2-digit'} , )
  const threedate = new Date((+new Date() + (2*86400000))).toLocaleString("en-US", { day : '2-digit'} , )
  const fourdate = new Date((+new Date() + (4*86400000))).toLocaleString("en-US", { day : '2-digit'} , )
  const fivedate = new Date((+new Date() + (6*86400000))).toLocaleString("en-US", { day : '2-digit'} , )
  const datevar = [twodate, threedate, fourdate, fivedate]
  const InfectionType = ["Yes", "No"]
    // const [currentDashboard, setDashboard] = useState(1);
    let name, value;
    const handlechange = (e) => {
      e.preventDefault();
      console.log("happ");
      seterrors(validate(userdata));
      console.log(userdata);
      console.log(errors);
      setissubmit(true);
    };
    useEffect(() => {
      console.log(errors);
      if (Object.keys(errors).length === 0 && submit) {
        console.log(userdata);
      }
    }, [errors]);
const handleInputs = (e)=>{
  console.log(e);
  name = e.target.name;
  value = e.target.value;

  setUser({...user, [name]:value})
}
const postData = async (e)=>{
  e.preventDefault();
  const {name, email}= user;
 const res = await fetch("/register", {
    method:"POST",
    headers :{
      "Contennt-Type" : "application/json"
    },
    body:JSON.stringify({
      name, email
    })
  })
  const data =await data.json();
  if(data.status === 422 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registration");
  }else{
    window.alert("IRegistration");
    // navigate("/Login")
    console.log("up")

  }
}
  return (
    <div>
      <multiStepContext.Provider 
      value={{currentStep, setStep, userdata, setUserData,handleInputs,postData, finalData, setFinalData,errors, seterrors,submit, setissubmit,infectionType, setInfextionType, InfectionType, date,  setDate , datevar}}>
        <DonationRegistration/>
      </multiStepContext.Provider>
    </div>
  )
}

export default DonationFormContext;
