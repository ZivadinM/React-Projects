import img1 from "..//assets/location.png"

export default function Card(propss){
  const img=`/src/assets/${propss.item.coverImg}`
    return(
        <div className="cardwraper">
        <img src={img} alt="London" className="HeaderImg"></img>
        <div className="cardinfo">
        <div className="cardheader">
          <img src={img1} alt="location"></img>
          <h3>{propss.item.country}</h3>
          <a href={propss.item.link} target="_blank">Vie on Google Maps</a>
        </div>
        <h1>{propss.item.header}</h1>
        <span>{propss.item.date.from}</span><span> - </span><span>{propss.item.date.to}</span>
        <p className="desc">{propss.item.description}</p>
      </div>
      </div>
    )
}