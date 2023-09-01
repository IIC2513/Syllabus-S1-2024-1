import './Card.css'

function Card({kind, value, buttonFunction}) {
  
    return (
        <div className={kind + " card"}>
            <h2>{kind}</h2>
            <h1>{value}</h1>
            <button onClick={buttonFunction} >
                Click
            </button>
            
        </div>
    )
  }
  
  export default Card
  
