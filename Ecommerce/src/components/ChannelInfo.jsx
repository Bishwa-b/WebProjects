import ChannelContent from "./ChannelContent"
export default function ChannelInfo(props){
    return(
        <div className="Products-container">
            <h1>{props.ProductType}</h1>
            
            <content>
            {props.Product.map((productsList) => <ChannelContent {...productsList} />)}
            </content>
        </div>
            
    )
}