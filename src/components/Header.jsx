import TravelLogo from "../assets/travel-logo.png";
import FavoriteIcon from "../assets/icons/favorite-icon.png";
import UsersIcon from "../assets/icons/user-icon.png";
import { Link } from "react-router-dom";
import { useAuthContext } from '../providers/AuthProvider';

export const Header = () => {
    const checksUserInResponse = () => {
        const { profile } = useAuthContext();
        if(profile){
            return ("/response");
        }else{
            return ("/login");
        }
    }
    const inResponse = checksUserInResponse();

    const checksUserInUser = () => {
        const { profile } = useAuthContext();
        if (profile) {
            return ("/user");
        } else {
            return ("/login");
        }
    }
    const inUser = checksUserInUser();

    return (
        <header className="default-page-color position-relative">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-3 px-lg-5 shadow-sm">
                <div className="container-fluid d-flex align-items-center">
                    <Link className="navbar-brand" to="/"><img src={TravelLogo} alt="Travel Goo"
                        className="img-fluid" width="60px" /></Link>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbar-toggler-color-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto gap-2">
                            <li className="nav-item">
                                <Link className="nav-link mx-lg-4" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-lg-4" to='/aboutus'>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-lg-4" to={inResponse}>Response</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto flex-row gap-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src={FavoriteIcon} alt="favorite"
                                    className="img-fluid" width="30px" /></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={inUser}><img src={UsersIcon} alt="user"
                                    className="img-fluid" width="30px" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

