import "../Styles/Header.css" ;
import image from "../uni-logo.jpeg"
const Header = () => {
    return(
        <header className="main-header"  alt="University Logo">
            <div className="logo">
            <img src={image} alt="University Logo" />
            </div>
            <nav>
                <ul>
                <li></li>

                    <li></li>
                </ul>
            </nav>

        </header>

    );
};
export default Header;