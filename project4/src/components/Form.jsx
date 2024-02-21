import React from "react"


export default function Form() {
  const [memerel, setrel]=React.useState({
    toptext: "",
    bottomtext: "",
    img: "http://i.imgflip.com/1bij.jpg"
  }
  )
  const [allmeme,setallmeme]=React.useState({})

  const [formData,setFromData]=React.useState({
    top:"",
    bottom:""
  })

 function handleChange(event){
  setFromData(prevFormData=> {
    return {...prevFormData,
  [event.target.name]:event.target.value}
  })
 }

 const id=React.useId();

 React.useEffect(()=>{
  fetch("https://api.imgflip.com/get_memes").then(x=>x.json()).then(data=>
  setallmeme(data)
  )
 },[])

function imgg(){
  const memobj=allmeme.data.memes;
  const randomNumber = Math.floor(Math.random() * memobj.length);
  const url=  memobj[randomNumber].url;
  setrel(prevrel=> {return{
    ...prevrel,
    img:url
  }}
  )}
  console.log(memerel.img);
    return (
    <div className="form">
      <div className="inputwraper"> 
        <div>    <label htmlFor={id+"-top"}>Top Text</label>
    <input htmlFor={id+"-top"} type="text" placeholder="Shut up" name="top" value={formData.top} onChange={handleChange}></input>
    </div>
    <div>    <label htmlFor={id+"-bottom"}>Bottom Text</label>
    <input htmlFor={id+"-bottom"} type="text" placeholder="And take my money" name="bottom" value={formData.bottom} onChange={handleChange}></input>
    </div>
    </div>
    <button className="btn" onClick={imgg} >Get a new mame image 🖼</button>
    <div className="m">
    <img src={memerel.img} className="mm" alt="" />
    <h2 className="meme--text mt" name >{formData.top}</h2>
    <h2 className="meme--text mb">{formData.bottom}</h2>
    </div>
    
    </div>
  )
}
