import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Estrutura 1 ",
      description: "Nota 1000",
      imgUrl: projImg1,
    },
    {
      title: "Estrutura 2",
      description: "Nota 980",
      imgUrl: projImg2,
    },
    {
      title: "Estrutura 3",
      description: "Nota 920",
      imgUrl: projImg3,
    },
  
  ];
   
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>" O Livro é uma extensão da memória, pois onde um povo que não conhece a sua história está condenado a repeti-la" -Edmund Burke</p>
                <Tab.Container id="-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Redações</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Filmes e Séries</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Livros</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((projects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        -------
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> "Utopia" Livro por Thomas More</p>
                      <p> "1984" Livro por George Orwell</p>
                      <p> "Casa-Grande & Senzala" Livro por Gilberto Freyre</p>
                      <p> "A Revolução dos Bichos" Livro por George Orwell</p>
                      <p> "Modernidade Líquida" Livro por Zygmunt Bauman</p>
                      <p> "Jogos Vorazes" Livro por Suzanne Collins</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
