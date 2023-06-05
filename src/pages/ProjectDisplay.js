import React from "react";
import {useParams} from 'react-router-dom'
import {projects} from '../Components/ProjectList';
import { Github } from "react-bootstrap-icons";


function ProjectDisplay() {
    const {id} = useParams();
    const project = projects[id];

     return <div className="projectDisplay">
        <h1>{project.title}</h1>
        <img  src={project.imgUrl}/>
        <Github/>
        </div>
}

export default ProjectDisplay;