import Nav from "./Nav"
import Hero from "./Hero"
import Online from "./Online"
import Card from "./Card"
import Data from "./data"
import "..//index.css"
export default function App(){
    const cards = Data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}

            />
        )
    })     
    return(
    <div className="container">
        <Nav />
        <Hero />
        <Online />
        <div className="cardswraper">
            {cards}
        </div>


    </div>
    )
}