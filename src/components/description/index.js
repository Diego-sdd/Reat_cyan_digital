import React, { Fragment } from "react";
import { MDBBtn, MDBCardImage, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './styles.css';

import slide3 from '../body/image/slide3.png';

import web from '../description/img/des-web.png';
import design from '../description/img/web-design.png';
import seo from '../description/img/SEO.png';
import uxui from '../description/img/uxui.png';
import branding from '../description/img/branding.png';
import sociais from '../description/img/REDES.png';

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
                        <MDBCol size="12" className="borda_servicos_cima"></MDBCol>
                    </MDBRow>

                <MDBRow className="bg_servicos">

                <MDBCol md="5" className="text-servicos">
                        <h1 className="text-center">As Melhores soluções geram as <strong>Melhores Experiências.</strong></h1>
                        <p className="text-center">Oferecemos os mais diversos tipos de soluções buscando apresentar um serviço com qualidade e eficiência ao cliente.</p>

                    </MDBCol>
                    <MDBCol md="7" className="cards">
                        <MDBRow>
                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    SISTEMAS
                                                </h2>
                                                <h1>
                                                    WEB
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>SISTEMAS WEB</h1>
                                        <p>Criação de site,</p>
                                        <p>blog, portfólio,</p>
                                        <p>e outros tipos de</p>
                                        <p>sistemas.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    WEB
                                                </h2>
                                                <h1>
                                                    DESIGN
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>WEB DESIGN</h1>
                                        <p>Criação de logotipo,</p>
                                        <p>panfleto, banner</p>
                                        <p>e outros tipos de</p>
                                        <p>serviços.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                <div style={{ width: "100%" }} className="flip-card-front">
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    OTIMIZAÇÃO
                                                </h2>
                                                <h1>
                                                    SEO
                                                </h1>
                                            </div>
                                        </div>
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
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    APLICAÇÃO DE
                                                </h2>
                                                <h1>
                                                    UX/UI
                                                </h1>
                                            </div>
                                        </div>
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
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    CONSULTORIA DE
                                                </h2>
                                                <h1>
                                                    MARCA
                                                </h1>
                                            </div>
                                        </div>
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
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    REDES
                                                </h2>
                                                <h1>
                                                    SOCIAIS
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>REDES SOCIAIS</h1>
                                        <p>Realização de postagens,</p>
                                        <p>imagens, stories e</p>
                                        <p>outros serviços em</p>
                                        <p>redes sociais.</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>

                        <MDBCol size="12" className="borda_servicos_baixo"></MDBCol>

                    <MDBCol md="12" className="happy-company">
                        <h1 className="happy-company_title text-center">QUALIDADE E EFICIÊNCIA PARA O SEU NEGÓCIO</h1>
                        <p className="happy-company_text text-center">Para que a sua empresa ofereça uma experiência digital marcante, a Cyan coloca à sua disposição
                             a melhor equipe de especialistas em mídias digitais e as últimas inovações tecnológicas,
                            todos engajados em proporcionar os melhores resultados e a plena satisfação do seu cliente
                            ao pesquisar sobre seus produtos ou serviços. </p>
                    </MDBCol>
                </MDBRow>

                    <MDBRow>
                        <MDBCol size="12" className="borda_consultoria_cima"></MDBCol>
                    </MDBRow>

                <MDBRow className="text-contact-service">
                    <MDBCol md="8" className="text-center">
                        <p> FICOU INTERESSADO EM NOSSOS SERVIÇOS?</p>
                    </MDBCol>
                    <MDBCol md="4" className="text-center ajuste_btn">
                        <Fragment>
                            <MDBBtn
                                href="#"
                                target="_blank"
                                outline 
                                color="primary"
                            >
                                <div className="text-contact-service-solicite"> Solicite uma consultoria</div>
                            </MDBBtn>
                        </Fragment>
                    </MDBCol>
                </MDBRow>

                
                    <MDBRow>
                        <MDBCol size="12" className="borda_consultoria_baixo"></MDBCol>
                    </MDBRow>

            </MDBContainer>
        );
    }
}

export default Descriptions;

