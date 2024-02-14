import star from "../assets/star.png"
import "..//index.css"

export default function Card(propss){
    const img=`/src/assets/${propss.coverImg}`;
    console.log(img)
    let badge;
    if (propss.openSpots === 0) {
        badge = "SOLD OUT"
    } else if (propss.location === "Online") {
        badge = "ONLINE"
    }
    return(
    <div className="card2">
    {badge!=undefined && <div className="card--badge">{badge}</div>}
        <img src={img} className="d"  alt="" />
        <div className="cardwarp">
            <img src={star} alt="" />
            <span >{propss.stats.rating}</span><span>({propss.stats.reviewCount}) • </span><span> {propss.location}</span>
        </div>
            <h3>{propss.title}</h3>
            <p><span>From ${propss.price}</span>/ person</p>
    </div>
    )
}