import Response from "../assets/response.png";

export const AboutUsComponent = () => {
    return (
        <div className="main">
            <div id="about-us" className="about-us container-fluid px-lg-5">
                <p className="merits-title padding-title">What People Say About Us</p>
                <div className="about-us-content d-flex justify-content-center">
                    <img src={Response} alt="response" className="about-us-response" />
                </div>
            </div>
        </div>
    );
}

