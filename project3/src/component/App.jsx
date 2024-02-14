import Nav from "./Nav"
import Card from "./Card"
import Data from "./Data"

export default function App(){
    const podaci=Data.map(data =>{
        return (
        <Card 
            key={data.id}
            item={data}
            />)

    })
    return(
        <div>
            <Nav />
            <div className="CardCont containter ">
                {podaci}
                </div>
        </div>
    )
}