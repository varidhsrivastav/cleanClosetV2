const validate = (values) => {
    const errors = {};
    // regex
    const emailregex =
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    const phoneregex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i;
    const NameReg = /^[a-zA-Z]*$/;
    const PostalRegx = /^[0-9]*$/;
  
    // stage1
    //   name
    if (!values.name) {
      errors.name = " Enter first name";
    } else if (!NameReg.test(values.firstname)) {
      errors.name = "Name should only contain Alphabets";
    }
    //   email
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailregex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    //   phone
    // CountryCode
    if (!values.CountryCode) {
      errors.CountryCode = "Please select the country code ";
    }
    if (!values.phone) {
      errors.phone = "Please enter Phone Number";
    } else if (!phoneregex.test(values.phone)) {
      errors.phone = "Phone number is not valid";
    }
    //   gender
    if(!values.gender){
      errors.gender="Please select any one gender"
    }
    //   aboutyourself
    if (!values.description) {
      errors.description = "Please tell someting about yourself";
    }
    //age group
    
  //   uploadimage
    if(!values.UploadImage){
      errors.UploadImage = "Please upload your profile picture"
    }
  
  //   stage2 
  if (!values.address) {
      errors.address = "Please Enter address Name";
    }
    if (!values.city) {
      errors.city = "Please Enter City Name";
    } 
    if (!values.state) {
      errors.state = "Please Enter state Name";
    } 
    if (!values.postalcode) {
      errors.postalcode = "Please Enter Correct Postal Code";
    }else if (!PostalRegx.test(values.postalcode)){
      errors.postalcode= "Invalid Postal code"
    }else if(values.postalcode.length < 6){
      errors.postalcode= "Enter a Valid Postal Code"
    }else if(values.postalcode.length > 6){
      errors.postalcode= "Enter a Valid Postal Code"
    }
  
  
    // stage 3
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
  
    // stage 3
    if (!values.prefferedjob) {
      errors.prefferedjob = "Please select atleast one job";
    }
    if (!values.CurrentProffesion) {
      errors.CurrentProffesion = "Please select atleast one Proffesion ";
    }
    if (!values.ExpectedFees) {
      errors.ExpectedFees = "Please Enter Exected Fee";
    }
    if (!values.ClassToTake) {
      errors.ClassToTake = "Please Enter the number of class you want to take";
    }
  
    // stage 4
    if (values.Experties) {
      errors.Experties = "This field is required";
    }
    if (values.Academics) {
      errors.Academics = "This field is required";
    }
  
    return errors;
  };
  export default validate;
  