import React from "react";
import '../contact/styles.css';
import slide3 from '../body/image/slide3.png';
import gif from '../contact/img/gif.gif';
import { MDBRow, MDBCol, MDBBtn, MDBContainer, MDBInput } from "mdbreact";

class Descriptions extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        city: "",
        state: "",
        zip: ""
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

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

                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <MDBRow>
                        <MDBCol md="6">
                            <img src={gif}></img>
                        </MDBCol>
                        <MDBCol md="6" className="form-contact">
                            <MDBRow>
                                <MDBCol md="6" className="mb-3">
                                    <label
                                        htmlFor="defaultFormRegisterEmailEx2"
                                        className="grey-text"
                                    >
                                        Nome
                                </label>
                                    <input
                                        value={this.state.lname}
                                        name="lname"
                                        onChange={this.changeHandler}
                                        type="text"
                                        id="defaultFormRegisterEmailEx2"
                                        className="form-control"
                                        placeholder="Nome"
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                </MDBCol>
                                <MDBCol md="6" className="mb-3">
                                    <label
                                        htmlFor="defaultFormRegisterEmailEx2"
                                        className="grey-text"
                                    >
                                        Sobrenome
                                </label>
                                    <input
                                        value={this.state.lname}
                                        name="lname"
                                        onChange={this.changeHandler}
                                        type="text"
                                        id="defaultFormRegisterEmailEx2"
                                        className="form-control"
                                        placeholder="Sobrenome"
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12" className="mb-3">
                                    <label
                                        htmlFor="defaultFormRegisterConfirmEx3"
                                        className="grey-text"
                                    >
                                        Email
              </label>
                                    <input
                                        value={this.state.email}
                                        onChange={this.changeHandler}
                                        type="email"
                                        id="defaultFormRegisterConfirmEx3"
                                        className="form-control"
                                        name="email"
                                        placeholder="Digite seu email"
                                    />
                                    <small id="emailHelp" className="form-text text-muted">
                                        Nunca compartilharemos seu email com mais ninguém.
                                    </small>
                                </MDBCol>
                                <MDBCol md="12" className="mb-3">

                                    <MDBInput type="textarea" label="Digite sua Mensagem" outline />
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

