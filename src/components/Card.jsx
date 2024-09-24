function Card ({getData ,v}){
console.log(v)
    return(
        <div className="card">
            
            <h1>Card</h1>
            <h2>{v}</h2>
            <button onClick={() => getData("gulzar")}>send data</button>
        </div>
    )
}
export default Card;