import TicketIcon from "../assets/icons/ticket-icon.png";
import HotelIcon from "../assets/icons/hotel-icon.png";
import TourPlanIcon from "../assets/icons/paper-plane-icon.png";

import CalenderIcon from "../assets/icons/calender-icon.png";
import AnalyticIcon from "../assets/icons/analytic-icon.png";
import LocationIcon from "../assets/icons/location-icon.png";
import HistoryIcon from "../assets/icons/history-icon.png";

export const Service = () => {
    return (
        <div className="main">
            <div className="container-fluid px-lg-5 service-block">
                <p className="main-title">Our Service</p>
                <div className="plan-list-container d-flex justify-content-center">
                    <ul className="plan-list">
                        <li className="plan-list_item-second plan-item_width">
                            <img src={TicketIcon} alt="ticket" className="plan-list_item-icon" />
                            <p className="plan-item_title">Ticket Booking</p>
                            <p className="plan-item_text">We book all kind of national or international
                                ticket for your destinaion.</p>
                        </li>
                        <li className="plan-list_item plan-item_width">
                            <img src={HotelIcon} alt="hotel" className="plan-list_item-icon" />
                            <p className="plan-item_title">Hotel Booking</p>
                            <p className="plan-item_text">You can easily book your according to your
                                budget hotel by our website.</p>
                        </li>
                        <li className="plan-list_item-second plan-item_width">
                            <img src={TourPlanIcon} alt="paper plane" className="plan-list_item-icon" />
                            <p className="plan-item_title">Tour Plan</p>
                            <p className="plan-item_text">We provide you the best plan within a short
                                time explore more.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="merits-container container-fluid px-lg-5">
                <div className="merits-content d-flex flex-column justify-content-center">
                    <p className="merits-title">We always try to give you<br />the best service</p>
                    <p className="merits-text">We always try to make our customer Happy. We provide all kind
                        of<br />facilities. Your Satisfaction is our main priority.</p>
                    <div className="merits-list_block d-flex justify-content-center">
                        <ul className="merits-list mx-auto">
                            <li className="merits-items d-flex flex-column align-items-center">
                                <img src={CalenderIcon} alt="calender" className="merits-list_item-icon" />
                                    <p className="merits-item_title">15+</p>
                                    <p className="merits-item_text">Years of Experience</p>
                            </li>
                            <li className="merits-items d-flex flex-column align-items-center">
                                <img src={AnalyticIcon} alt="analytic" className="merits-list_item-icon" />
                                    <p className="merits-item_title">15k+</p>
                                    <p className="merits-item_text">Happy Travellers</p>
                            </li>
                            <li className="merits-items d-flex flex-column align-items-center">
                                <img src={LocationIcon} alt="map" className="merits-list_item-icon" />
                                    <p className="merits-item_title">650+</p>
                                    <p className="merits-item_text">Places Visited</p>
                            </li>
                            <li className="merits-items d-flex flex-column align-items-center">
                                <img src={HistoryIcon} alt="history" className="merits-list_item-icon" />
                                    <p className="merits-item_title">2k+</p>
                                    <p className="merits-item_text">Travel History</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

