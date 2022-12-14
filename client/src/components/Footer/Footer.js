import "./Footer.css"

let Footer = (props) => {
    return (
        <footer className="w-100 py-4 flex-shrink-0 bg-dark text-white">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <h5 className="h1 text-white">PS.</h5>
                        <p className="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <p className="small mb-0"> &copy; Copyrights. All rights reserved.</p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/Adopt">Adopt</a></li>
                            <li><a href="/DonateUs">Donate</a></li>
                            <li><a href="/ContactUs">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Find Us At</h5>
                        <ul className="list-unstyled">
                            <li><a href="/"> <i className="fa-brands fa-facebook-square"></i> Facebook </a></li>
                            <li><a href="/"> <i className="fa-brands fa-instagram"></i> Instagram </a></li>
                            <li><a href="/"> <i className="fa-brands fa-linkedin"></i>  LinkedIn </a> </li>
                            <li><a href="/"> <i className="fa-brands fa-twitter"></i> Twitter </a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-3">Newsletter</h5>
                        <p className="small"> Sign up for our newsletter to regularly know about the work we do at Pet Sanctum.</p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <input className="form-control" type="text" placeholder="Enter your Email here" />
                                    <button className="btn btn-primary email-btn" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="p-4 end d-flex align-items-center justify-content-center">
                Made with <i className="fa fa-heart fa-lg mx-2"></i> by Nitant, Sreekar, Tejas, Jayanth and Tanishq.
            </div>
        </footer>
    );
};

export default Footer;