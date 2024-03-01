import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';

const MorningBrew = () => (
  <div>
    <h1>Morning Brew Hawaii</h1>
  </div>
);

const Morningbrew = () => (
  <Container fluid>
    <Logo />
    <TopMenu />
    <MiddleImage />
    <BottomFooter />
  </Container>
);

const Logo = () => {
  return (
    <div className="py-2 container">
      <div className="mx-auto navbar-nav">
        <img src="morning-brew-hawaii-logo-black.png" className="d-block mx-auto img-fluid" alt="Morning Brew Hawaii Logo"/>
      </div>
    </div>
  );
}

const TopMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="justify-content-center container">
        <div className="mx-auto navbar-nav">
          <div className="active border-3 border-top border-dark nav-item">Home</div>
          <div className="border-1 border-top border-dark nav-item">Order Online</div>
          <div className="border-1 border-top border-dark nav-item">Menus</div>
          <div className="border-1 border-top border-dark nav-item">Locations</div>
          <div className="border-1 border-top border-dark nav-item">About</div>
          <div className="border-1 border-top border-dark nav-item">Shop</div>
          <div className="border-1 border-top border-dark nav-item">Contact</div>
        </div>
      </div>
    </nav>
  );
}

const MiddleImage = () => {
  return (
    <div id="center-image" className="align-items-center row">
      <div className="col-md-3"></div>
      <div className="col-md-3">
        <h1 className="display-1">Aloha</h1>
        <h4>Morning Brew Hawai'i</h4>
        <h4 className="text-danger">Kailua and Kaka'ako, O'ahu</h4>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-danger btn-md"><i>ORDER ONLINE</i></button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-danger btn-md"><i>OUR MENUS</i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomFooter = () => {
  return (
    <footer className="mt-auto py-3 bg-light">
      <div className="container">
        <div className="justify-content-center py-2 row">
          <div className="text-center col-md-4">
            <h4>MORNING BREW KAILUA</h4>
            <p>600 Kailua Rd, Kailua, HI 96734<br />(808) 262-7770<br />mb.crew22@gmail.com</p>
            <h3><i className="bi bi-instagram"></i></h3>
          </div>
          <div className="text-center col-md-4">
            <h4>MORNING BREW KAKA'AKO</h4>
            <p>685 Auahi St #113 Honolulu, HI 96813<br />(808) 369-3444<br />mbkakaako@gmail.com</p>
            <h3><i className="bi bi-instagram"></i></h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><Morningbrew /></StrictMode>);



