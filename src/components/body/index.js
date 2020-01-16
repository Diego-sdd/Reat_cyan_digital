import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../body/styles.css';
import { Row, Container, Col, Image, Button, Carousel, Card } from 'react-bootstrap';
import { MDBCarouselCaption, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import slide1 from '../body/image/slide1.png';
import slide2 from '../body/image/slide2.png';
import slide3 from '../body/image/slide3.png';

import icon1 from '../body/image/programacao.png';
import icon2 from '../body/image/designgrafico.png';
import icon3 from '../body/image/webdesign.png';

import inove from '../body/image/home_inova.png';

import tipmart from '../body/image/tipmart.png';
import openheart from '../body/image/openheart.png';
import ac from '../body/image/agilecards.png';
import panfleto1 from '../body/image/panfleto.png';
import panfleto2 from '../body/image/panfleto2.png';
import logotipmart from '../body/image/tipmartlogo.png';

import logo1 from '../body/image/LOGO1.png';
import logo2 from '../body/image/LOGO2.png';
import logo3 from '../body/image/LOGO3.png';
import logo4 from '../body/image/LOGO4.png';


const BodyContent = () => (
    <body>
        <Container fluid={true} style={{ color: "black" }}>
            <Row>
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
            </Row>

            <MDBRow className="agencia_inove">
                <MDBCol md="6" >
                    <h1>A Agência de
                        Marketing Digital</h1>
                    <div className="border"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, lorem et volutpat porttitor,
                         quam dui tempus purus, et lobortis diam metus non ex. Etiam nec volutpat justo.
                        Vivamus ac libero metus. Aenean placerat metus sit amet feugiat viverra. Aliquam hendrerit
                         nulla ut orci porta condimentum.</p>
                </MDBCol>
                <MDBCol md="6">
                    <img src={inove}></img>
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol size="12" className="borda_solucoes_cima">
                </MDBCol>
            </MDBRow>


            <Row>
                <Col xs lg="12" className="content_products">
                    <Col xs lg="12">
                        <h4 id="title_content_products">Principais Soluções</h4>
                    </Col>
                    <Row>
                        <Col xs lg="4">
                            <div className="solutions_icons">
                                <img src={icon1}></img>
                                <h4 className="subtitle">SISTEMAS WEB</h4>
                                <p>Necessita de um sistema online? Conte conosco para desenvolver um sistema web que atenda seus expectativas!</p>
                            </div>
                        </Col>
                        <Col xs lg="4">
                            <div className="solutions_icons">
                                <img src={icon2}></img>
                                <h4 className="subtitle">REDES SOCIAIS</h4>
                                <p>Criação de postagens, elaboração de imagens e stories para atingir ainda mais o público de sua marca!</p>
                            </div>
                        </Col>
                        <Col xs lg="4">
                            <div className="solutions_icons">
                                <img src={icon3}></img>
                                <h4 className="subtitle">WEB DESIGNER</h4>
                                <p>Precisa de uma nova identidade para sua marca? Conte com nossa equipe para realizar os serviços necessários para a sua marca!</p>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>

            <MDBRow>
                <MDBCol size="12" className="borda_servico_cima">
                </MDBCol>
            </MDBRow>

            <Row>
                <ul className="gallery_box">

                    <li>
                        <a href="#0"><img src={tipmart}></img>
                            <div className="box_data">
                                <span className="boxtitle">TIPMART</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#0"><img src={openheart}></img>
                            <div className="box_data">
                                <span className="boxtitle">OPEN HEART</span>
                            </div>
                        </a>
                    </li>


                    <li>
                        <a href="#0"><img src={ac}></img>
                            <div className="box_data">
                                <span className="boxtitle">LOGO AGILE CARDS</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#0"><img src={panfleto1}></img>
                            <div className="box_data">
                                <span className="boxtitle">PANFLETO S.I.</span>
                            </div>
                        </a>
                    </li>


                    <li>
                        <a href="#0"><img src={panfleto2}></img>
                            <div className="box_data">
                                <span className="boxtitle">PANFLETO N&N REPAROS</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#0"><img src={logotipmart}></img>
                            <div className="box_data">
                                <span className="boxtitle">LOGO TIPMART</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </Row>

            <MDBRow>
                <MDBCol size="12" className="borda_marca1">
                </MDBCol>
            </MDBRow>
            <Row className="text-white bg_marcas ajuste_logo">
                <MDBCol size="4" className="bg_marcash1">
                    <h1>QUEM <strong>CONFIA</strong></h1>
                    <div className="border"></div>
                </MDBCol>
                <MDBCol size="8" >

                    <Row>
                        <Col size="3"><img src={logo1}></img></Col>
                        <Col size="3"><img src={logo2}></img></Col>
                        <Col size="3"><img src={logo3}></img></Col>
                        <Col size="3"><img src={logo4}></img></Col>
                    </Row>

                </MDBCol>
            </Row>

            <MDBRow>
                <MDBCol size="12" className="borda_marca2">
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol size="12">

                </MDBCol>
            </MDBRow>

        </Container>
    </body>
);

export default BodyContent;