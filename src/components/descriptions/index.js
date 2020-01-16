import React from "react";
import '../descriptions/style.css';
import slide3 from '../body/image/slide3.png';
import { MDBRow, MDBCol, MDBBtn, MDBContainer, MDBInput } from "mdbreact";

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
                    <MDBCol md="12" className="content-quem-somos">
                        <h1 className="text-center ">Quem <strong>Somos</strong></h1>
                        {/* <div className="border"></div> */}
                        <p className="text-center content-quem-somos-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies, lorem et volutpat porttitor,
                        quam dui tempus purus, et lobortis diam metus non ex. Etiam nec volutpat justo. Vivamus ac libero metus.
                        Aenean placerat metus sit amet feugiat viverra. Aliquam hendrerit nulla ut orci porta condimentum.</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="12">
                        <div class="container">
                            <div class="timeline-block timeline-block-right">
                                <div class="marker"></div>
                            </div>
                            <div class="timeline-block timeline-block-left">
                                <div class="marker"></div>
                            </div>
                            <div class="timeline-block timeline-block-center">
                                <div class="marker"></div>
                            </div>
                        </div>
                        <MDBRow className="content-text">
                            <MDBCol md="4" >
                                <p>Um pai assassina sua família em Beaufort, Carolina do Sul, EUA. Aparentemente parece apenas mais um caso de </p>
                            </MDBCol>
                            <MDBCol md="4">
                                <p>Um pai assassina sua família em Beaufort, Carolina do Sul, EUA. Aparentemente parece apenas mais um caso de </p>
                            </MDBCol>
                            <MDBCol md="4">
                                <p>Um pai assassina sua família em Beaufort, Carolina do Sul, EUA. Aparentemente parece apenas mais um caso de </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>


            </MDBContainer >
        );
    }
}


export default Descriptions;

