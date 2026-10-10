import { Link } from 'react-router-dom';
import './Header.css';
function Header(){
    return (<>
        <header className="header">
            <div className="logo">
                🛒 ShopEasy</div>
            <nav className="navbar">
                    <Link to ="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to ="/categories">Categories</Link>
                    <Link to ="/hooks">Hooks</Link>
                    <Link className="cart">
                 🛒 Cart</Link>
            </nav>
        </header>   
        </>
    )
}
export default Header;