import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../footer/styles.css';

import logo from '../footer/image/logo512.png';


const FooterContent = () => {
  return (
    <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="6" className="text-center espacamento">

          <img src={logo}></img>

          </MDBCol>
          <MDBCol md="6">
            <h5 className="titlefooter text-center">Contatos</h5>
            <ul className="centralizar">
              <li className="list-unstyled">
                <a href="#!">FACEBOOK</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">INSTAGRAM</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">LINKEDIN</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">BEHANCE</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="www.cyandigital.com.br">CYANDigital.com.br</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterContent;