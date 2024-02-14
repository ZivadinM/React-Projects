import img1 from "../assets/image 22.png"
import img2 from "../assets/image 23.png"
import img3 from "../assets/image 24.png"
import img4 from "../assets/image 25.png"
import img5 from "../assets/image 26.png"
import img6 from "../assets/image 27.png"
import img7 from "../assets/image 28.png"
import img8 from "../assets/image 29.png"
import img9 from "../assets/image 30.png"


export default function Hero(){
    return(
        <div className="imgwraper">
            <img src={img1} alt=""/>
            <div className="imgg">
            <img src={img9}alt="" />
            <img src={img3} alt="" />
            </div>
            <div className="imgg">
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            </div>
            <div className="imgg">
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            </div>
            <div className="imgg">
            <img src={img8}alt="" />
            <img src={img2} alt="" />
            </div>

        </div>
        )
}