import { ProjectCard } from "./ProjectCard"

export const Projects = ()=>{
    const projects =[
        {
            title:"",
            description:"",
            imgUrl:projImg,
        },
        {
            title:"",
            description:"",
            imgUrl:projImg,
        },
        {
            title:"",
            description:"",
            imgUrl:projImg,
        },
        {
            title:"",
            description:"",
            imgUrl:projImg,
        },
        {
            title:"",
            description:"",
            imgUrl:projImg,
        },
        {
            title:"",
            description:"",
            imgUrl:projImg,
        },
        
    ]
        
    return (
        <section >
            <Row>
                <Col>
                    <h2></h2>
                    <p></p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab one </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
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
        </section>
    )
}