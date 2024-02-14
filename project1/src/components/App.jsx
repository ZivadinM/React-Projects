import Info from "./Info.jsx"
import About from "./About.jsx"
import Interest from "./Interest.jsx"
import Footer from "./Footer.jsx"
import "..//index.css"


export default function App(){
    return(
        <div className="container">
            <Info />
            <About />
            <Interest />
            <Footer />
      </div>
    )
}