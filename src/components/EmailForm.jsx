export const EmailForm = () => {
    return (
        <div className="email-content d-flex flex-column justify-content-center align-items-center ">
            <p className="email-title text-center text-muted">
                Subscribe to get information, latest news and other<br /> interesting offers about Cobham
            </p>
            <form method="POST" className="email-form d-flex">
                <input type="email" className="form-control" placeholder="Your email" />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
        </div>
    );
}

