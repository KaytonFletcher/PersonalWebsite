import React from 'react';

import './App.css';
import ScienceLab from './Components/ScienceLab';

const lightTheme = {
  "--color-solid": "black",
  "--color-surface": "white",
  "--color-primary": "teal"
};
const darkTheme = {
  "--color-solid": "white",
  "--color-surface": "black",
  "--color-primary": "purple"
};

const App = () => {
  const [currentTheme, setTheme] = React.useState("light");

  React.useEffect(() => {
    //changes theme by setting css vars from light to dark
    const theme = (currentTheme === "light") ? lightTheme : darkTheme;
    for (var key in theme) {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    }
  }, [currentTheme])

  const onClick = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <div>
       <h1>{currentTheme === "light" ? "Light theme" : "Dark theme"}</h1>
      <button onClick={onClick}>Toggle theme</button>
      <ScienceLab></ScienceLab>
    </div>
  );
}

export default App;
