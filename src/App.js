// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // console.log(firstName + " " + lastName);
  // function changeFirstHandler(event){
  //    console.log('Change First Handler')
  //   console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeSecondHandler(event){
  //   console.log("Change Second Handler")
  //   console.log(event.target.value); 
  //   setLastName(event.target.value);
  // }


  const [formData, setFormData] = useState({firstName : "", 
  lastName : "", email:"" , comments:""});
  console.log(formData);
  function changeHandler(event) {
    setFormData(prevFormData => {
      return {
      ...prevFormData,
        [event.target.name]: event.target.value
      }
    });
  }
  

  return (
    <div className="App">
      <form action="">
        <br />
        <input type="text" placeholder="First Name" onChange={changeHandler} name="firstName" value={formData.firstName} />

        <br/><br/><br/>

        <input type="text" placeholder="Last Name" onChange={changeHandler} name="lastName" value={formData
        .lastName}/>
        
        <br/><br/><br/>
        
        <input type="email" placeholder="Enter your Email here " onChange={changeHandler} name="email" value={formData.email}/>
        
        <br/><br/><br/>

          <textarea name="comments" placeholder="Enter your Comments here" onChange={changeHandler} value={formData.comments}/>
      </form>
    </div>
  );
}

export default App;
