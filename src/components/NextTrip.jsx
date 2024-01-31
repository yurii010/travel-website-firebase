import Destination from "../assets/destination.png";
import Payment from "../assets/payment.png";
import Airport from "../assets/airport.png";
import TripImage from "../assets/trip-image.png";

export const NextTrip = () => {
    return (
        <div className="main">
            <div className="steps-container container-fluid px-lg-5">
                <div className="steps-container d-flex flex-column justify-content-center">
                    <p className="merits-title padding-title-trip">Book Your Next Trip in 3 Easy Steps</p>
                    <p className="steps-text text-center">Easy and Fast</p>
                    <div className="step-content">
                        <div className="steps-list_container d-flex justify-content-center align-items-center">
                            <ul className="steps-list">
                                <li className="steps-list_item d-flex flex-row">
                                    <img src={Destination} alt="destination" className="steps-image" />
                                    <div className="list-item_container">
                                        <p className="list-item_title">
                                            Choose Destination
                                        </p>
                                        <p className="list-item_text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                                        </p>
                                    </div>
                                </li>
                                <li className="steps-list_item d-flex flex-row">
                                    <img src={Payment} alt="payment" className="steps-image" />
                                    <div className="list-item_container">
                                        <p className="list-item_title">
                                            Make Payment
                                        </p>
                                        <p className="list-item_text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                                        </p>
                                    </div>
                                </li>
                                <li className="steps-list_item d-flex flex-row">
                                    <img src={Airport} alt="airport" className="steps-image" />
                                    <div className="list-item_container">
                                        <p className="list-item_title">
                                            Reach Airport on Selected Date
                                        </p>
                                        <p className="list-item_text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <img src={TripImage} alt="trip" className="trip-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

