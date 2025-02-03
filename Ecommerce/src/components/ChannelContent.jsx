export default function ChannelContent(props){
    return(
            <div className="product-container">
                <div className="img-container">
                    <img src={props.img.src} alt={props.img.alt} />
                </div>
                
                <div className="product-info">
                    <h3>{props.name}</h3>
                    <span>{props.rating}</span>
                </div>
                
                <p>{props.price}</p>
            </div>
    )
}