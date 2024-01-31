import WorldMapTwo from "../assets/world-map-two.png";
import Thailand from "../assets/Thailand.png";
import Indonesia from "../assets/Indonesia.png";
import NewZealand from "../assets/New-Zealand.png";
import NavigateIcon from "../assets/icons/navigate-icon.png";

export const Distinations = () => {
    return (
        <div className="main">
            <div className="distination-container container-fluid px-lg-5">
                <p className="merits-title py-5">Our Popular Distinations</p>
                <div className="distinations-content">
                    <div className="map-box">
                        <img src={WorldMapTwo} alt="world map" className="world-map-two" />
                    </div>
                    <div className="distinations-list_container">
                        <ul className="distination-list d-flex flex-column gap-5">
                            <li className="distination-item">
                                <img src={Thailand} alt="Thailand" className="distination-img" />
                                <div className="distination-info">
                                    <p className="distination-item_text">Thailand</p>
                                    <p className="distination-item_text">20+ Spots<br />2D &3N</p>
                                    <a href="#" className="distination-item_link">
                                        <img src={NavigateIcon} alt="more icon" className="navigation-icon" />
                                    </a>
                                </div>
                            </li>
                            <li className="distination-item">
                                <img src={Indonesia} alt="Indonesia" className="distination-img" />
                                <div className="distination-info">
                                    <p className="distination-item_text">Indonesia</p>
                                    <p className="distination-item_text">25+ Spots<br />3D &3N</p>
                                    <a href="#" className="distination-item_link">
                                        <img src={NavigateIcon} alt="more icon" className="navigation-icon" />
                                    </a>
                                </div>
                            </li>
                            <li className="distination-item">
                                <img src={NewZealand} alt="New Zealand" className="distination-img" />
                                <div className="distination-info">
                                    <p className="distination-item_text">New Zealand</p>
                                    <p className="distination-item_text">20+ Spots<br />3D &2N</p>
                                    <a href="#" className="distination-item_link">
                                        <img src={NavigateIcon} alt="more icon" className="navigation-icon" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

