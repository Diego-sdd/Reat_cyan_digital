import React, { Fragment } from "react";
import { MDBBtn, MDBCardImage, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './styles.css';

import slide3 from '../body/image/slide3.png';

class Descriptions extends React.Component {
    render() {
        return (
            <MDBContainer fluid={true}>
                <MDBRow>
                    <div className="img_top text-center">
                        <img src={slide3}></img>
                        <figcaption>CONFIRA ABAIXO TODOS OS NOSSOS SERVIÇOS</figcaption>
                        <p>Somos uma Agência de Performance Digital, focada em gerar orçamentos,<br></br>
negócios e vendas para nossos clientes. Confira a seguir nossas estratégias.</p>
                    </div>
                </MDBRow>


                <MDBRow>
                <MDBCol md="5" className="text-servicos">
                        <h1 className="text-center">As Melhores soluções geram as <strong>Melhores Experiências.</strong></h1>
                        <p className="text-center">Oferecemos os mais diversos tipos de soluções buscando apresentar um serviço com qualidade e eficiência ao cliente.</p>

                    </MDBCol>
                    <MDBCol md="7" className="cards">
                        <MDBRow>
                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>WEB SITES</h1>
                                        <p>Criação de Site,</p>
                                        <p>Blog, Portfólio,</p>
                                        <p>e outros tipos de</p>
                                        <p>sistemas.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>DESIGN GRÁFICO</h1>
                                        <p>Criação de Logo,</p>
                                        <p>Panfleto, Banner,</p>
                                        <p>e outros tipos de</p>
                                        <p>serviços.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>SEO</h1>
                                        <p>Desenvolvimento de</p>
                                        <p>otimizações para</p>
                                        <p>melhorar o posicionamento</p>
                                        <p>em pesquisas.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>UX/UI</h1>
                                        <p>Desenvolvimento de</p>
                                        <p>interfaces para</p>
                                        <p>melhorar a usabilidade</p>
                                        <p>do usuário.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>BRANDING</h1>
                                        <p>Aplicação de atividades</p>
                                        <p>e serviços para</p>
                                        <p>auxiliar a gestão</p>
                                        <p>de sua marca.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>REDES SOCIAIS</h1>
                                        <p>Realização de imagens,</p>
                                        <p>postagens e outros</p>
                                        <p>serviços para divulgação</p>
                                        <p>de sua marca</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>

                    <MDBCol md="12" className="happy-company">
                        <h1 className="happy-company_title text-center">QUALIDADE E EFICIÊNCIA PARA O SEU NEGÓCIO</h1>
                        <p className="happy-company_text text-center">Para que a sua empresa ofereça uma experiência digital marcante, a Cyan coloca à sua disposição
                             a melhor equipe de especialistas em mídias digitais e as últimas inovações tecnológicas,
                            todos engajados em proporcionar os melhores resultados e a plena satisfação do seu cliente
                            ao pesquisar sobre seus produtos ou serviços. </p>
                    </MDBCol>


                </MDBRow>


                <MDBRow className="text-contact-service">
                    <MDBCol md="8" className="text-center">
                        <p> FICOU INTERESSADO EM NOSSOS SERVIÇOS?</p>
                    </MDBCol>
                    <MDBCol md="4" className="text-center">
                        <Fragment>
                            <MDBBtn
                                href="#"
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

