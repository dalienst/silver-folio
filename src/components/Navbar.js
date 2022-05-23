import React from "react";
import "../styles/Style.css";
import {BsGithub} from "react-icons/bs";
import {SiTwitter} from "react-icons/si"
import {SiGmail} from "react-icons/si"

export default function Navbar() {
    return(
        <header className="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/about">
                        <img src="./dal.png" alt=" " width="30" height="25" className="d-inline align-text-top rounded"></img>
                         Dalienst Oduor
                    </a>
                    <button class="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" 
                            aria-controls="navbarNav" 
                            aria-expanded="False" 
                            aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Hire me</a>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link text-dark " href="https://github.com/dalienst"> <BsGithub/> </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="https://twitter.com/ntesa_09"> <SiTwitter/> </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="mailto:oduordalienst@gmail.com"> <SiGmail/> </a>
                            </li>
                        </ul>
                        <span class="navbar-text text-light ">
                            Knock knock... Quality service address
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}