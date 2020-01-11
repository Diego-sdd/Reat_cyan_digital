import React, { Fragment } from "react";
import { MDBBtn, MDBCardImage, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './styles.css';


class Descriptions extends React.Component {
    render() {
        return (
            <MDBContainer fluid={true}>
                <MDBRow>
                    <div className="img_top">
                        <img src="https://miro.medium.com/max/10250/1*elSTWQJmjPx9h2nVXui_7w.jpeg"></img>
                        <figcaption>Conheça Todos Nosos Serviços</figcaption>
                        <p>Somos uma Agência de Performance Digital, focada em gerar orçamentos,
negócios e vendas para nossos clientes. Confira a seguir nossas estratégias.</p>
                    </div>
                </MDBRow>


                <MDBRow>
                    <MDBCol md="7" className="cards">
                        <MDBRow>
                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>John Doe</h1>
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>John Doe</h1>
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>John Doe</h1>
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>John Doe</h1>
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>John Doe</h1>
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>John Doe</h1>
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="5" className="text-servicos">
                        <h1 className="text-center">As Melhores soluções geram as <strong>Melhores Experiência.</strong></h1>
                        <p className="text-center">Contamos com um time dedicado ao desenvolvimento de novas tecnologias
                         e criatividade, focado em aprimorar nossas soluções e trazer o que há de mais inovador para nossos clientes.</p>

                    </MDBCol>

                    <MDBCol md="12" className="happy-company">
                        <h1 className="happy-company_title text-center"> FICOU INTERESSADO EM NOSSOS SERVIÇOS?</h1>
                        <p className="happy-company_text text-center">Para que a sua empresa ofereça uma experiência digital marcante, a Cyan coloca à sua disposição
                             a melhor equipe de especialistas em mídias digitais e as últimas inovações tecnológicas,
                            todos engajados em proporcionar os melhores resultados e a plena satisfação do seu cliente
                            ao pesquisar sobre seus produtos ou serviços. </p>
                    </MDBCol>


                </MDBRow>


                <MDBRow className="text-contact-service">
                    <MDBCol md="8" className="text-center">
                        <p> FICOU INTERESSADO EM NOSSOS SERVIÇOS ?</p>
                    </MDBCol>
                    <MDBCol md="4" className="text-center">
                        <Fragment>
                            <MDBBtn
                                href="https://www.mdbootstrap.com"
                                target="_blank"
                                color="primary"
                                rounded
                            >
                                <div className="text-contact-service-solicite"> Solicite uma consultoria</div>
                            </MDBBtn>
                        </Fragment>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Descriptions;

