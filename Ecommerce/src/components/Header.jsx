export default function Header(){
    return(
        <header>
            <div className="icon">
                <div className="icon-container">
                    <img src="src/assets/images/icons/shopping-cart.png" alt="Icon" />
                </div>
                
                <h1>BStore</h1>
            </div>
            <h1><span>Brand</span>Store</h1>
            <div className="user">
                <img src="src/assets/images/icons/search.png" alt="Search" />
                <img src="src/assets/images/icons/shopping-bag.png" alt="Bag" />
                <img src="src/assets/images/icons/user.png" alt="User" />
            </div>
        </header>
    )
}