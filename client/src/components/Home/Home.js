import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';
import homeImg1 from "./Homeimages/stray-dof-sarfraz-scaled.jpg"
import homeImg2 from "./Homeimages/background.jpg"
import homeImg3 from "./Homeimages/stray2.jpg"
import homeImg4 from "./Homeimages/pet.jpg"
import homeImg5 from "./Homeimages/154189.jpg"
import homeImg6 from "./Homeimages/testimonials/modiji.jpg"
import homeImg7 from "./Homeimages/154189.jpg"
import homeImg8 from "./Homeimages/img.webp"


import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';

let Home = (props)=>{

    return (
        <React.Fragment>      
            <section id="home" className='home_sreekar'>
                <div className="container-fluid px-0 top-banner" style ={{backgroundImage: `url(${homeImg1}) `,backgroundRepeat: "noRepeat" ,backgroundPosition: "center"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <h1 className="hech1_sreekar" style={{color: "white"}}>Providing All Animals Homes.</h1>
                                <p className = "pee_sreekar" style={{color: "white"}}> India has 80 million homeless dogs, cats, has highest levels of abandonment and THIS BREAKS OUR HEARTS! Join our cause and help provide lives to these poor souls. </p>

                                <div className="mt-4">
                                    <Link to="/Adopt">
                                        <button className="main-btn" id="banner-adopt-button">
                                            Adopt A Pet
                                        </button>
                                    </Link>
                                    <Link to="/Upload">
                                    
                                        <button className="white-btn ms-lg-4 mt-lg-0 mt-4">
                                            Find Owner
                                        </button>
                                    </Link>
            
                            
                               
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        
            <section id="about" data-aos="fade-up">
                <div className="about-section wrapper" style={{backgroundColor: "var(--secondary-color)", paddingBottom: "0"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                                <div className="card border-0 sreekar">
                                    <img src={homeImg7} className="card-image_sreekar img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 text-sec">
                                <h2 className="hech2_sreekar" style={{color:"white"}}>About Us</h2>
                                <p className="pee_sreekar">We are a group of students who share a common love for animals and believe that all animals deserve homes. We strive to provide care and shelter for all animals irrespective of their species or breed and put an end to animal cruelty. We help make the world a better place for voiceless animals who deserve more than to be abandoned and killed.</p>
                                    <Link to="/DonateUs">
                                        <button className="main-btn mt-4">Find Out More</button>
                                    </Link>
                    
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="rescue-stray-section wrapper" style={{backgroundColor: "white"}}>
                        <div className="container rescue-stray">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                                    <h2 className="hech2_sreekar" style={{color: "var(--primary-color)"}}>Help a Stray Animal Get a Home.</h2>
                                    <p className="pee_sreekar"> Relinquishment levels are higher in India than on a global level with half (50 per cent) of current and previous owners stating they have relinquished a pet in the past, compared to 28 per cent on a global level. About 34 per cent said they have abandoned a dog on the streets, and 32 per cent have abandoned a cat. Most of these animals die in accidents or due to hunger very soon. If you see a stray animal in your neighbourhood, use our site to rescue it and provide a home for it. </p>
                                        <Link to="/Rescue">
                                            <button className="main-btn mt-4">Rescue A Stray</button>
                                        </Link>
                                </div>
                                <div className="col-lg-7 col-md-12">
                                    <div className="card border-0">
                                        <img src={homeImg8} alt="" className="card-image_sreekar img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story" data-aos="fade-up">
                <div className="story-section" style={{background: `url(${homeImg2})`, backgroundRepeat: "noRepeat" ,backgroundPosition: "center"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="text-content">
                                    <h2 className="hech2_sreekar">It All Started With One Animal</h2>
                                    <p className="pee_sreekar"> The need for this movement struck us when we saw for ourselves how pet stores, from which most people buy pets for a lot of money, treat animals horribly. We wanted to tell the world to see animals as living beings instead of tokens for public clout.
                                    </p>
                                    <Link to="/Rescue">
                                        <button className="main-btn mt-4">Rescue A Stray</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="explore-features" style={{backgroundColor: "var(--white-color)"}}>
                
                <div className="explore-features wrapper">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <div className="card bg-light h-100">
                                    <div className="card-body text-center">
                                        <div className='square-box'>
                                            <div className='square-content' id="card1Image" style={{backgroundImage: `url(${homeImg3})`, dataAos:"fade-right"}}>

                                            </div>
                                        </div>

                                        <Link to="/Adopt">
                       
                                            <div className="card-btn m-3">Adopt A Pet</div>
                                        </Link>
                                        <p className="card-text"> Get a new member in your family </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="card bg-light h-100">
                                    <div className="card-body text-center">
                                        <div className='square-box'>
                                            <div className='square-content' id="card2Image" style={{backgroundImage: `url(${homeImg4})`, dataAos:"fade-up"}}></div>
                                        </div>
                                        <Link to="/Upload">
                                            <div className="card-btn m-3">Find Owner</div>
                                        </Link>
                         
                                    
                                        <p className="card-text"> We help them find a new place to live </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="card bg-light h-100">
                                    <div className="card-body text-center">
                                        <div className='square-box'>
                                            <div className='square-content' id="card3Image" style={{backgroundImage: `url(${homeImg5})`, dataAos:"fade-left"}}></div>
                                        </div>
                                        <Link to="/Rescue">
                                            <div className="card-btn m-3">Rescue A Stray</div>
                                        </Link>
                                        <p className="card-text"> Save an animal from dying </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" data-aos="fade-up">
                <div className="wrapper testimonial-section">
                    <div className="container text-center">
                        <div className="text-center pb-4">
                            <h2 className="hech2_sreekar" style={{color: "var(--primary-color)"}}>Testimonials</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-10 offset-lg-1">

                                <div className="container-fluid" id="testxyz">
                                    <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                                className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                                aria-current="true" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                                aria-current="true" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="carousel-caption">
                                                    <img src={homeImg6} alt="" />
                                                    <p className="pee_sreekar">"Mitron, help Indian animals find homes."</p>
                                                    <h5 className="hech5_sreekar" style={{color: "white"}}>Narendra Modi - Prime Minister of India</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="carousel-caption">
                                                    <img src="./Homeimages/testimonials/putin.jpeg" alt="" />
                                                    <p className="pee_sreekar">"Очень хороший сайт. Пожалуйста, ставьте оценки"</p>
                                                    <h5 className="hech5_sreekar" style={{color: "white"}}>Vladimir Putin - President of Russia</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="carousel-caption">
                                                    <img src="./Homeimages/testimonials/testimonial.jpg" alt="" className="mt-3" />
                                                    <p className="pee_sreekar">"I wish there were more such organizations in the world."</p>
                                                    <h5 className="hech5_sreekar" style={{color: "white"}}>Dr. Michelle - Animal Right Activist</h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="p-5 faq" id="questions" data-aos="fade-up">

                <Accordion defaultActiveKey="0">
                    <h2 className="hech2_sreekar, text-center mb-4">
                        Frequently Asked Questions
                    </h2>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Where are you located?</Accordion.Header>
                        <Accordion.Body>
                        We are located in Sri City, a leading industrial city in India.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What do I need to know?</Accordion.Header>
                        <Accordion.Body>
                        We are an NGO striving to make a difference. And you can help us without putting any money or effort from your side. Just upload the details of an animal to save it.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How much does it cost?</Accordion.Header>
                        <Accordion.Body>
                        It is totally free of cost. Everyone can upload the details of their pets or stray animals to rescue it, and provide a new family to it. 
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How do I sign up?</Accordion.Header>
                        <Accordion.Body>
                        Click on the Sign Up button to create a free account in Petsanctum.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </section>
        
        </React.Fragment>
    );
};

export default Home;