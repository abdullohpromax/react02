const Card = ({img, taytl, des, name})=>{
  
    
    return(
        <div className="card">
            <img src={img} alt="" />
            <h1 className="taytl">{taytl}</h1>
            <h2 className="des">{des}</h2>
            <h3 className="name">{name}</h3>
        </div>
    )
};


export default Card;