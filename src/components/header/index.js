import React from 'react';
import { MDBNavbar, MDBCarouselCaption, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContaine } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../header/image/logo192.png';
import slide1 from '../body/image/slide1.png';
import slide2 from '../body/image/slide2.png';
import slide3 from '../body/image/slide3.png';
import '../header/styles.css';
import 'typeface-roboto';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
      <header>
        <Router>
          <MDBNavbar color="grey darken-4" fixed="top" dark expand="md" scrolling transparent>
            <MDBNavbarBrand href="/">
            <img src={logo} className="img_logo_nav"/>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="#">HOME</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">SERVIÇOS</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">RESULTADOS</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">CONTATO</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>

        <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
        >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h2-responsive title">DESENVOLVIMENTO WEB</h3>
              <p className="text">Conte conosco para a criação de seu website,
              <br></br>com certeza não irá se arrepender!</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={slide2} 
                alt="Second slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h2-responsive title">DESIGN</h3>
              <p className="text">Conte conosco para a elaboração de Designs Gráficos e Web Designer,
               <br></br>com certeza não irá se arrepender!</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h2-responsive title">ABRACE A CYAN</h3>
              <p className="text">Ainda não contratou nossos serviços?
              <br></br>Está esperando o que? Dê um upgrade já no seu negócio!</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </header>
    </div>
    );
  }
}

export default Header;