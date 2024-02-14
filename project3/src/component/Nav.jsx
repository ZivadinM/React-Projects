import img from "..//assets/worldicon.png"
export default function Nav(){
    return(
        <nav>
        <div className="navheader">
          <img src={img} alt="WorldWide"></img>
          <p>MyTravel</p>
        </div>
      </nav>
    )
}