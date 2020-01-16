import React from "react";
import '../contact/styles.css';
import slide3 from '../body/image/slide3.png';
import gif from '../contact/img/gif.gif';
import axios from 'axios';
import { MDBRow, MDBCol, MDBBtn, MDBContainer, MDBInput } from "mdbreact";

class Descriptions extends React.Component {


    handleSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name == "" || email == "" || message == "") {
            const Swal = require('sweetalert2');
            Swal.fire({
                title: 'Preencha Todos os Campos!',
                text: 'Click aqui para continuar',
                icon: 'error',
                confirmButtonText: 'Continuar'
            })
            return
        } else {

            axios({
                method: "POST",
                url: "http://localhost:3002/send",
                data: {
                    name: name,
                    email: email,
                    messsage: message
                }
            }).then((response) => {
                if (response.data.msg === 'success') {
                    const Swal = require('sweetalert2');
                    Swal.fire({
                        title: 'Ebaa! Seus dados foram enviados',
                        text: 'Entraremos em Contato com você.',
                        icon: 'success',
                        confirmButtonText: 'Continuar'
                    })
                    this.resetForm()
                } else if (response.data.msg === 'fail') {
                    alert("Message failed to send.")
                }
            })
        }
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }


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

                <form className="needs-validation" noValidate onSubmit={this.handleSubmit.bind(this)} method="POST" id="contact-form">
                    <MDBRow>
                        <MDBCol md="6">
                            <img src={gif}></img>
                        </MDBCol>
                        <MDBCol md="6" className="form-contact">
                            <MDBRow>
                                <MDBCol md="12">
                                    <p>Nome</p>
                                    <MDBInput type="name" label="Digite seu nome" id="name" outline />
                                </MDBCol>
                                <MDBCol md="12">
                                    <p>Email</p>
                                    <MDBInput type="email" label="Digite seu email" id="email" outline />
                                </MDBCol>

                                <MDBCol md="12">
                                    <p>Mensagem</p>
                                    <MDBInput type="textarea" label="Digite sua Mensagem" id="message" name="message" outline />
                                </MDBCol>
                            </MDBRow>
                            <MDBBtn color="primary" type="submit">
                                Enviar
                                    </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>





            </MDBContainer >
        );
    }
}


export default Descriptions;

