export function createHeader(){
    const header = document.createElement("header");
    header.className='header';
    header.innerHTML=` <div class="logo">🛒 ShopEasy</div>
        <nav class="navbar">
            <a href="#">Home</a>
            <a href="#products">Products</a>
            <a href="#categories">Categories</a>
            <a href="#contact">Contact</a>
            <a href="#" class="cart">
                🛒 Cart</a>
        </nav> `;

        return header;
}