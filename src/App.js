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
  lastName : "", email:"" , comments:"" , isVisible:true , mode:"" , favCar:""});
  // console.log(formData);

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
      ...prevFormData,
        [name]: type==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing the data After Submitting");
    console.log(formData);
  }
  

  return (
    <div className="App">
      <form action="" onSubmit={submitHandler}>
        <br />
        <input 
          type="text" 
          placeholder="First Name" 
          onChange={changeHandler} 
          name="firstName" 
          value={formData.firstName} 
        />

        <br/><br/><br/>

        <input 
          type="text" 
          placeholder="Last Name" 
          onChange={changeHandler} 
          name="lastName" 
          value={formData
          .lastName}
        />
        
        <br/><br/><br/>
        
        <input 
          type="email" 
          placeholder="Enter your Email here " 
          onChange={changeHandler} 
          name="email" 
          value={formData.email}
        />
        
        <br/><br/><br/>

        <textarea 
          name="comments" 
          placeholder="Enter your Comments here" 
          onChange={changeHandler} 
          value={formData.comments}
        /> 

        <br/><br/><br/>

        <input
          name="isVisible"
          type="checkbox"
          onChange={changeHandler}
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am i Visible?</label>

        <br/><br/><br/>
        <fieldset>
          <legend>Mode:</legend>
          <input 
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
         <label htmlFor='Online-Mode'>
          Online Mode
         </label>

          <input 
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

          <select 
            name="favCar"
            id="favCar"
            value={formData.favCar}
            onChange={changeHandler}
          >
            <label htmlFor="favCar">
              Tell me your Favorite Car
            </label>
            <option value="Select">Select</option>
            <option value="Mercedes GLS Maybach 600">Mercedes GLS Maybach 600</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Defender">Defender</option>
            <option value="Scorpio">Scorpio</option>
          </select>  
          
           <br/><br/>


          <input type="Submit" >
            
          </input>
      </form>
    </div>
  );
}

export default App;
