import Main from "./main"
import Nav from "./nav"
import "./App.css"
import React from "react"

export default function App(){
  const [theme,setTheme]=React.useState(false)
  function toggleDargMode(){
    setTheme(prevTheme => {return !prevTheme})
  }
  return(
    <div className='container'>
      <Nav 
      darkMode={theme}
      toggleDarkMode={toggleDargMode}
      /> 
      <Main 
      darkMode={theme}
      />
    </div>
)
}