import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ( { id, title, description, imgUrl }) => {
  const navigate = useNavigate();
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => {navigate("/port/projects/"+ id )}}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;
