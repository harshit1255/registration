// import { useState } from "react";
// import "./App.css";

// const App = () => {

//   let [email,setEmail]= useState('');
//   let [pass,setpass]= useState('');
//   let [cnfm,setcnfm]= useState('');
//   let [passwordColor,setPasswordColor] = useState({'borderColor':'red'});
//   let [emailColor,setEmailColor] = useState({borderColor:'red'})
//   let [cnfmColor,setCnfmColor] = useState({borderColor:'red'})

//   function emailverify()
//   {

//   }
  
//   return (
//     <div id="box">
//       <div class='inputs' id='email'>
//         <label for='email'>email</label>
//         <input value={email} id ='email' name='email' type="text" onChange={(e)=>{setEmail(e.target.value);}} />
//         <p>email is not valid</p>
//       </div>
//       <div class='inputs'>
//         <label for='pass'>password</label>
//         <input  type="password" value={pass} id='pass' onChange={(e)=>setpass(e.target.value)}/>
//         <p>password must be of length 8</p>
//       </div>
//       <div class='inputs'>
//         <label for = 'cnfm'>confirm password</label>
//         <input value={cnfm} type="password" id='cnfm' onChange={(e)=>setcnfm(e.target.value)}/>
//         <p>passwords do not match</p>
//       </div>
//     </div>
//   );
// };
// export default App;

// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [emailValid, setEmailValid] = useState(false);
//   const [passwordValid, setPasswordValid] = useState(false);
//   const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//     setEmailValid(validateEmail(newEmail));
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     setPasswordValid(validatePassword(newPassword));
//   };

//   const handleConfirmPasswordChange = (e) => {
//     const newConfirmPassword = e.target.value;
//     setConfirmPassword(newConfirmPassword);
//     setConfirmPasswordValid(password === newConfirmPassword);
//   };

//   const validateEmail = (email) => {
//     // Basic email validation using regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Password length validation
//     return password.length >= 6;
//   };

//   return (
//     <div className="container">
//       <div className="input-group">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={handleEmailChange}
//           className={emailValid ? 'valid' : ''}
//         />
//       </div>
//       <div className="input-group">
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={handlePasswordChange}
//           className={passwordValid ? 'valid' : ''}
//         />
//       </div>
//       <div className="input-group">
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={handleConfirmPasswordChange}
//           className={confirmPasswordValid ? 'valid' : ''}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(validatePassword(newPassword));
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(password === newConfirmPassword);
  };

  const validateEmail = (email) => {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password length validation
    return password.length >= 6;
  };

  const handleSignup = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Successful');
    } else {
      alert('Unsuccessful');
    }
  };

  return (
    <div className="container">
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className={emailValid ? 'valid' : ''}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordValid ? 'valid' : ''}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={confirmPasswordValid ? 'valid' : ''}
        />
      </div>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default App;
