import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
   return (firstName.length !== 0 && validateEmail(email) && password.value.length > 8 && role !== "role") ? true : false;
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
    value: "",
    isTouched: false,
  });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  const passwordHandle = (value) => {
    setPassword((prevState) => {
      return {
        ...prevState,
        isTouched: true,
        value: value
      }
    })
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input onChange={ (e) => setFirstName(e.target.value)} value = {firstName} placeholder="First name" />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input onChange={ (e) => setLastName(e.target.value)} value = {lastName} placeholder="Last name" />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input onChange={ (e) => setEmail(e.target.value)} value = {email} placeholder="Email address" />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input onChange={(e) => passwordHandle(e.target.value)} value = {password.value} placeholder="Password" />
               { (password.isTouched && password.value.length < 8 ) ? <PasswordErrorMessage/> : "" } 
          </div>
  

          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value = {role}  onChange={ (e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
