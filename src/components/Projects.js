import { Container } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import {Col,Nav, Tab, Row} from "react-bootstrap"
import projImg1 from "../assets/img/portfolio.png"
import projImg2 from "../assets/img/Projet2.png"
import projImg3 from "../assets/img/Projet3.png"

import cert1 from "../assets/img/cert1.jpg"
import cert2 from "../assets/img/cert2.png"

export const Projects = ()=>{
    const projects =[
        {
            title:"Portfolio",
            description:"",
            imgUrl:projImg1,
            alt:"img1"
        },
        {
            title:"Citizen Connect ",
            description:"",
            imgUrl:projImg3,
            alt:"img2"
        },
        {
            title:" Hotel booking",
            description:"",
            imgUrl:projImg2,
            alt:"img3"
        },
        
        
    ]
        
    const certifications =[
        {
            title:"English for STEM",
            description:"",
            imgUrl:cert1,
            alt:"cert1"
        },
        {
            title:"SQL Basic ",
            description:"",
            imgUrl:cert2,
            alt:"cert2"
        },
       
        
        
    ]
    return (
    <section className="project" id="projects">
        <div className='absolute blur blur-round three-rem'></div>
        <Container>
            <Row>
                <Col>
                    <h2>Projects & Certifications</h2>
                    <p>Like stars in the vast cosmos, each project and certification illuminates my journey and reflect my commitment to continuous learning and innovation. Below are some highlights of my work and achievements. For a more comprehensive view, including additional projects, please visit my GitHub.</p>
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
                        <Tab.Pane eventKey="second">
                        <Row>
                                {
                                    certifications.map((certificate,index)=>{
                                        return(
                                            <ProjectCard
                                                key={index}
                                                {...certificate}
                                            />
                                        )
                                    })
                                }
                            </Row>
                         </Tab.Pane>
                        
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        {/* <img className="backgroung-image-right" src={colorSharp2}/> */}
    </section>
    )
}