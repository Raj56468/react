const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>STEP INTO COMFORT AND STYLE WITH OUR PREMIUM FOOTWEAR COLLECTION. WE OFFER THE HIGHEST QUALITY SHOES FOR EVERY OCCASION.</p>

                <div className="hero-buttons">
                    <button className="shop-now-button">SHOP NOW</button>
                    <button className="learn-more-button">LEARN MORE</button>
                </div>
                <div className="availability">
                    <p>Also available in select stores</p>
                    <div className="store-logos">
                        <img src="/store-1.png" alt="Store 1" />
                        <img src="/store-2.png" alt="Store 2" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/ccd.png" alt="Comfortable shoes hero" />
            </div>
        </main >
    );
};

export default HeroSection;