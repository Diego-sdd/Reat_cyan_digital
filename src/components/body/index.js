import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../body/styles.css';
import { Row, Container, Col, Image, Button, Carousel, Card } from 'react-bootstrap';
import { MDBCarouselCaption, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';
import slide1 from '../body/image/slide1.png';
import slide2 from '../body/image/slide2.png';
import slide3 from '../body/image/slide3.png';

import icon1 from '../body/image/programacao.png';
import icon2 from '../body/image/designgrafico.png';
import icon3 from '../body/image/webdesign.png';

import tipmart from '../body/image/tipmart.png';
import openheart from '../body/image/openheart.png';
import ac from '../body/image/agilecards.png';
import panfleto1 from '../body/image/panfleto.png';
import panfleto2 from '../body/image/panfleto2.png';
import logotipmart from '../body/image/tipmartlogo.png';


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
            <Row>
                <Col xs lg="12" className="content_products">
                    <Col xs lg="12">
                        <h4 id="title_content_products">Principais Soluções</h4>
                    </Col>
                    <Row>
                        <Col xs lg="4">
                            <div className="solutions_icons">
                                <Image src={icon1}></Image>
                                <h4 className="subtitle">PROGRAMAÇÃO</h4>
                                <p>Desenvolvemos sites, blogs, portfólios e outros sistemas web com o objetivo de proporcionar uma ótima solução ao cliente!</p>
                            </div>
                        </Col>
                        <Col xs lg="4">
                            <div className="solutions_icons">
                                <Image src={icon2}></Image>
                                <h4 className="subtitle">DESIGN GRÁFICO</h4>
                                <p>Criamos logos, banners, panfletos e outros modelos de design com o objetivo de proporcionar uma ótima solução ao cliente!</p>
                            </div>
                        </Col>
                        <Col xs lg="4">
                            <div className="solutions_icons">
                                <Image src={icon3}></Image>
                                <h4 className="subtitle">WEB DESIGNER</h4>
                                <p>Analisamos e reparamos interfaces, cores, layouts e outros componentes com o objetivo de proporcioanr uma ótima solução de UX e UI ao cliente!</p>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>




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




            <Row>
                <Col xs lg="12" className="bg_depoimento">
                    <h3 className="text-center title_depoimento">Depoimentos</h3>
                    <Carousel indicators={false} interval={10000} className="ajustar_carousel">
                        <Carousel.Item>
                            <Row>
                                <Col xs lg="2">

                                </Col>
                                <Col xs lg="3" className="text-center texto_depoimento">

                                    <Col xs={12} md={12}>
                                        <Image className="d-block w-10 imagem_ajuste" src="https://226363-691092-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2015/08/avt-500x500px-fundo-transp.png" />
                                    </Col>

                                    <h3>Fulano Beltrano</h3>
                                    <p>"Me impressinou a qualidade e compromisso da empresa, com certeza irei solicitar outros serviços"</p>

                                </Col>
                                <Col xs lg="2">

                                </Col>
                                <Col xs lg="3" className="text-center texto_depoimento">

                                    <Col xs={12} md={12}>
                                        <Image className="d-block w-10 imagem_ajuste" src="https://uploads.scratch.mit.edu/users/avatars/34083956.png" />
                                    </Col>


                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                </Col>
                                <Col xs lg="2">

                                </Col>

                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>

                            <Row>
                                <Col xs lg="2">

                                </Col>
                                <Col xs lg="3" className="text-center texto_depoimento">
                                    <Col xs={12} md={12}>
                                        <Image className="d-block w-10 imagem_ajuste" src="https://uploads.scratch.mit.edu/users/avatars/34083956.png"/>
                                    </Col>


                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                </Col>
                                <Col xs lg="2">

                                </Col>
                                <Col xs lg="3" className="text-center texto_depoimento">
                                    <Col xs={12} md={12}>
                                        <Image className="d-block w-10 imagem_ajuste" src="https://uploads.scratch.mit.edu/users/avatars/34083956.png"/>
                                    </Col>


                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                </Col>
                                <Col xs lg="2">

                                </Col>

                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>





        </Container>
    </body>
);

export default BodyContent;