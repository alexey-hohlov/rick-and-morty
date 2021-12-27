import { slide1, slide2, slide3, slide4 } from "../assets/images";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center text-center mt-4">
                <div className="col-8">
                    <h1>Welcome to the Rick and Morty React Project!</h1>

                    <div className="mt-5 mb-5">
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={6000}
                            showStatus={false}
                            showThumbs={false}
                        >
                            <div>
                                <img
                                    className="carousel-image"
                                    src={slide1}
                                    alt=""
                                ></img>
                            </div>
                            <div>
                                <img
                                    className="carousel-image"
                                    src={slide2}
                                    alt=""
                                ></img>
                            </div>
                            <div>
                                <img
                                    className="carousel-image"
                                    src={slide3}
                                    alt=""
                                ></img>
                            </div>
                            <div>
                                <img
                                    className="carousel-image"
                                    src={slide4}
                                    alt=""
                                ></img>
                            </div>
                        </Carousel>
                    </div>

                    <h2>Libraries / packages used:</h2>
                    <h4>
                        ReactJS, Redux-Toolkit, react-router-dom, bootstrap,
                        axios, react-responsive-carousel, react- paginate
                    </h4>
                </div>
            </div>
        </div>
    );
}
