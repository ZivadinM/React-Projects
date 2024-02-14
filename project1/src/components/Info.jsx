import mail from "..//assets//email(1).png"
import li from "..//assets//linkedin.png"
import img from "..//assets/IMG_3185.png"

export default function Info(){
    return(
        <div className="info">
        <img src={img} className="pic"></img>
        <h1>Zivadin Milenkovic</h1>
        <h3>Junior Developer</h3>
        <h6>linked in</h6>
        <div className="buttons"><a href="mailto:zikamilenkovic97@gmail.com" target="_blank"><div className="button"><img src={mail} alt="" /><a href="">Mail</a></div></a>
        <a href="https://www.linkedin.com/in/zivadin-milenkovic-766891223/" target="_blank"><div className="button blue"><img src={li}  alt="" /><a href="">Linked In</a></div></a></div>

      </div>
    )
}