const Navigation = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="public/logo.png" alt="Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">SERVICES</a></li>
                </ul>
                <button className="login-button">LOGIN</button>
            </nav>
        </div>
    );
};

export default Navigation;