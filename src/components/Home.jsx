import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img
                    src="/assets/bg.jpg"
                    className="card-img"
                    alt="bg"
                    height="950px"
                />
                <div className="card-img-overlay d-flex flex-column justfiy-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
                        <p className="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;