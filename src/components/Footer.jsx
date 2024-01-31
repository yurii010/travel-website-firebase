import TravelGooBlack from "../assets/travel-goo-black.png";
import Facebook from "../assets/icons/facebook-icon.png";
import Instagram from "../assets/icons/instagram-icon.png";
import Twitter from "../assets/icons/twitter-icon.png";
import GooglePlay from "../assets/Google Play.png";
import PlayStore from "../assets/Play Store.png";

export const Footer = () => {
    return (
        <div className="container mt-auto d-flex flex-column align-items-center">
            <footer className="footer w-100">
                <div className="col mb-3">
                    <a href="#" className="text-decoration-none">
                        <img src={TravelGooBlack} alt="travel goo" className="travel-goo_footer" />
                    </a>
                    <p className="text-muted motivation-text_footer">Book your trip in minute, get full
                        Control for much longer.
                    </p>
                </div>
                <div className="col mb-3">
                    <h5 className="footer-fragment_title">Company</h5>
                    <ul className="nav flex-column">
                        <li className="footer-fragment_text mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        <li className="footer-fragment_text mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
                        <li className="footer-fragment_text mb-2"><a href="#" className="nav-link p-0 text-muted">Mobile</a></li>
                    </ul>
                </div>
                <div className="col mb-3">
                    <h5 className="footer-fragment_title">Contact</h5>
                    <ul className="nav flex-column">
                        <li className="footer-fragment_text mb-2"><a href="#" className="nav-link p-0 text-muted">Help/FAQ</a></li>
                        <li className="footer-fragment_text mb-2"><a href="#" className="nav-link p-0 text-muted">Press</a></li>
                        <li className="footer-fragment_text mb-2"><a href="#" className="nav-link p-0 text-muted">Affilates</a></li>
                    </ul>
                </div>
                <div className="col mb-3">
                    <h5 className="footer-fragment_title">More</h5>
                    <ul className="nav flex-column">
                        <li className="footer-fragment_text mb-2"><a href="#" className="nav-link p-0 text-muted">Airlinefees</a>
                        </li>
                        <li className="footer-fragment_text mb-2"><a href="#" className="nav-link p-0 text-muted">Airlane</a></li>
                        <li className="footer-fragment_text mb-2"><a href="#" className="nav-link p-0 text-muted">Low fare tips</a>
                        </li>
                    </ul>
                </div>
                <div className="col mb-3">
                    <ul className="nav flex-column">
                        <li className="footer-item li-item_social-links mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                <img src={Facebook} alt="facebook" className="social-link_footer" />
                            </a>
                            <a href="#" className="nav-link p-0 text-muted">
                                <img src={Instagram} alt="instagram" className="social-link_footer" />
                            </a>
                            <a href="#" className="nav-link p-0 text-muted">
                                <img src={Twitter} alt="twitter" className="social-link_footer" />
                            </a>
                        </li>
                        <li className="footer-fragment_text mb-2"><a href="#" className="nav-link p-0 text-muted">Discover our
                            app</a></li>
                        <li className="nav-footer social-app_link mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                <img src={GooglePlay} alt="Google play" className="footer-app_link" />
                            </a>
                            <a href="#" className="nav-link p-0 text-muted">
                                <img src={PlayStore} alt="Play Store" className="footer-app_link" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="d-flex justify-content-center w-100">
                <p className="copyright">All rights reserved@travelgoo.com</p>
            </div>
        </div>
    );
}

