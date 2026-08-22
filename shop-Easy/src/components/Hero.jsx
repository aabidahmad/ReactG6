import './Hero.css';
function Hero(){
    let welcome = "Welcome to ShopEasy";
    return (
        <>
         <section class="hero">
            <div class="hero-content">
                <h1>{welcome}</h1>
                <p>
                    Find the best products at the best prices</p>
                <a href="#products" class="shop-btn">Shop Now</a>
            </div>
        </section>
        </>
    )
}
export default Hero;