import {Col} from "react-bootstrap";

export const ProjectCard = ({title,description,imgUrl,alt})=>{
    return(
        <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={alt} style={{width:"100%" }}/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    )
}