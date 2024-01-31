import IndonesiaCard from "../assets/Indonesia-card.png";
import JapanCard from "../assets/Japan-card.png";
import MountainsCard from "../assets/Mountains-card.png";
import LocationsIcon from "../assets/icons/location-icon.png";

export const Packages = () => {
    return (
        <div className="main">
            <div className="packages-container container-fluid px-lg-5">
                <p className="merits-title padding-title">Best Packages For You</p>
                <div className="button-list-container d-flex justify-content-center">
                    <div className="button-list">
                        <button type="button" className="packages-button">Hot deals</button>
                        <button type="button" className="packages-button disabled-color">Backpack</button>
                        <button type="button" className="packages-button disabled-color">South Asia</button>
                        <button type="button" className="packages-button disabled-color">Honeymoon</button>
                        <button type="button" className="packages-button disabled-color">Europe</button>
                        <button type="button" className="packages-button disabled-color">More</button>
                    </div>
                </div>
                <div className="trip-list-container d-flex justify-content-center">
                    <div className="trip-list">
                        <div className="trip-list_item">
                            <img src={IndonesiaCard} alt="Indonesia" className="trip-list_img" />
                            <div className="text-trip_container d-flex">
                                <p className="info-trip">3 Days, 2 Nights</p>
                                <p className="info-trip">$500 / Person</p>
                            </div>
                            <div className="info-trip_container">
                                <p className="info-trip_text">
                                    Explore the Beauty of the island for 3 days and 2 nights with our travel agency
                                </p>
                            </div>
                            <div className="trip-container-link d-flex">
                                <p className="location-info">
                                    <img src={LocationsIcon} alt="location icon" />Indonesia
                                </p>
                                <a className="trip-link">Know More</a>
                            </div>
                        </div>
                        <div className="trip-list_item">
                            <img src={JapanCard} alt="Japan" className="trip-list_img" />
                            <div className="text-trip_container d-flex">
                                <p className="info-trip">3 Days, 2 Nights</p>
                                <p className="info-trip">$800 / Person</p>
                            </div>
                            <div className="info-trip_container">
                                <p className="info-trip_text">
                                    Enjoy the Shrimes and blossoms here in this beautiful country </p>
                            </div>
                            <div className="trip-container-link d-flex">
                                <p className="location-info">
                                    <img src={LocationsIcon} alt="location icon" />Japan
                                </p>
                                <a className="trip-link">Know More</a>
                            </div>
                        </div>
                        <div className="trip-list_item">
                            <img src={MountainsCard} alt="Mountains" className="trip-list_img" />
                            <div className="text-trip_container d-flex">
                                <p className="info-trip">3 Days, 2 Nights</p>
                                <p className="info-trip">$600 / Person</p>
                            </div>
                            <div className="info-trip_container">
                                <p className="info-trip_text">
                                    Explore the majestic mountains and landscapes day and nights
                                </p>
                            </div>
                            <div className="trip-container-link d-flex">
                                <p className="location-info">
                                    <img src={LocationsIcon} alt="location icon" />Mountains
                                </p>
                                <a className="trip-link">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trip-button_container d-flex justify-content-center">
                    <button type="button" className="trip-button">Discover more</button>
                </div>
            </div>
        </div>
    );
}

