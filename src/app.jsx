import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import Task from './Task';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   // Your login logic here
  //   // For simplicity, we'll just set isLoggedIn to true
  //   setIsLoggedIn(true);
  // };

  return (
    <div>
      <h1>Task Management App</h1>
       {/* <LoginScreen/> */}
      <Task/>
      {/* {isLoggedIn ? (
        <Task />
       
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )} */}
    </div>
  );
};

export default App;
