import { Container } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import {Col,Nav, Tab, Row} from "react-bootstrap"
import projImg1 from "../assets/img/portfolio.png"
import projImg2 from "../assets/img/portfolio.png"
import projImg3 from "../assets/img/portfolio.png"

export const Projects = ()=>{
    const projects =[
        {
            title:"Portfolio",
            description:"",
            imgUrl:projImg1,
            alt:"img1"
        },
        {
            title:"CitizenConnect ",
            description:"",
            imgUrl:projImg2,
            alt:"img2"
        },
        {
            title:"Vanilla Pay",
            description:"",
            imgUrl:projImg3,
            alt:"img3"
        },
        
        
    ]
        
    return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                    <h2>Projects & Certifications</h2>
                    <p>Lorem</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Projects </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Certifications</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                    <Tab.Content> <br/><br/>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index)=>{
                                        return(
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second"> Loren Ipsum </Tab.Pane>
                        <Tab.Pane eventKey="third"> Loren Ipsum </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        {/* <img className="backgroung-image-right" src={colorSharp2}/> */}
    </section>
    )
}