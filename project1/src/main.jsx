import ReactDOM from "react-dom/client"
import App from "./components/App"

function Main(){
  return(
    <App />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />)