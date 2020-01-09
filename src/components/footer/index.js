import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../footer/styles.css';
import { Row, Container, Col, Image } from 'react-bootstrap';
const FooterContent = () => (
    <body>
        <Container fluid={true}>
            <Row>
                <Col xs lg="12" className="footer">
                    <Row>
                        <Col xs lg="12" id="title_footer">
                            <h4 className="text-center">Footer</h4>
                        </Col>
                        <Col xs lg="6">
                            <Image src="Logo.png" ></Image>
                        </Col>
                        <Col xs lg="6">
                            <div className="text_footer">
                                <h6>Soluções ideias para criação de site e loja virtual para pequenas e médias empresas. </h6>

                            </div>
                            <div className="contact_footer">
                                <p>Instagram</p>
                                <p>Facebook</p>
                                <p>E-mail</p>
                                <p></p>
                            </div>
                        </Col>

                    </Row>
                </Col>
            </Row>


        </Container>
    </body>
);

export default FooterContent;