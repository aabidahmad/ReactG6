import {createHeader} from './header.js';
function createHero(){
     const section = document.createElement("section");
     section.innerHTML=`<div class="hero-content">
                <h1>Welcome to ShopEasy</h1>
                <p>
                    Find the best products at the best prices</p>
                <a href="#products" class="shop-btn">Shop Now</a>
            </div>`;
            section.className="hero";
            return section;
}
function createCategories(){
   const section = document.createElement("section");
   section.className="categories-section";
   section.innerHTML=`<h2>Shop by Category</h2>
            <p class="section-description">
                Explore products from different categories
            </p>
            <div class="categories">
                <div class="category">
                    <div class="category-icon"> 💻
                    </div>
                    <h3>Electronics</h3>
                </div>
                <div class="category">
                    <div class="category-icon">
                        👕</div>
                    <h3>Clothing</h3>
                </div>
                <div class="category">
                    <div class="category-icon">
                        🎒</div>
                    <h3>Accessories</h3>
                </>div>
                <div class="category">
                    <div class="category-icon">
                        👟</div>
                    <h3>Footwear</h3>
                </div>
            </div>`;
            return section;
}
export function App(root){ 
    root.appendChild(createHeader());
    root.appendChild(createHero());
    root.appendChild(createCategories());


}