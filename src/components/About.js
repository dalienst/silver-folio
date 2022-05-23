import React from "react";
import "../styles/About.css";

export default function About() {
    return(
        <section className="About">
            <div className="container-fluid bg-light">
                <div className="row g-0">
                    <div className="col-sm-6">
                        <div className="card">
                            <img src="./me.jpeg" className="card-img" alt=""/>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}

