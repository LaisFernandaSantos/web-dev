import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.tiktok.com/@portifolio_estudantil?lang=pt-BR"><img src={navIcon1} alt="" /></a>
                <a href="https://twitter.com/PortifolioE"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/portifolio_estudantil/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Criado em 2022, Todos os Direitos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
