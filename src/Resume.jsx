import React, { Component } from "react"
import axios from "axios"

//import ProjectCard from "./ProjectCard"
//import { UndrawDashboard } from "react-undraw-illustrations"; 

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            resume: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/resume.json')
            .then(response => {
                this.setState({
                resume: response.data
            });
        })
    }    

    render() {
        const resume = this.state.resume
    

            resume.json = resume.map(resume => {
                return (
                key={resume:id}
                )
            })
        }
};


export default Resume 
