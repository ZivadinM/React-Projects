import logo from "./assets/react-logo.png"
export default function Nav(propss){
  
    return(
    <nav className={propss.darkMode ? "dark" : ""}>
    <div >
      <img src={logo} alt="" width={40}></img>
      <a href="">ReactProject</a>
    </div>
    <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={propss.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
  </nav>)
}
