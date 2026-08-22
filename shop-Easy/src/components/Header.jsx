import './Header.css';
function Header(){
    return (
        <>
        <header className="header">
            <div className="logo">
                🛒 ShopEasy</div>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Categories</a>
                <a href="#" className="cart">
                🛒 Cart</a>
            </nav>
        </header>   
        </>
    )
}
export default Header;