import React from 'react';
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        id: 1,
        title: "Python Versus Bot Game",
        description: "This is a Python project.",
        image: "/projects/pythonAI.jpg",
        gitUrl: "https://github.com/jtuam102/testjs/tree/d021b666255343b156dfb4046d27c9a5d0aba555/Python_project1"

    },
    {
        id: 2,
        title: "Python Grocery Management System",
        description: "This is a Python project.",
        image: "/projects/pythonGrocery.jpg",
        gitUrl: "https://github.com/jtuam102/testjs/tree/abe707127228e6a86b906a4793a5d85ae6c131bb/Python_grocery"
    },
    {
        id: 3,
        title: "Java Purchase Management System",
        description: "This is a Java project.",
        image: "/projects/javaPurchaseManagement.jpg",
        gitUrl: "https://github.com/jtuam102/testjs/tree/af6f6908edd1eae1efa8d41755c1da9576d4ba24/java%20project"
    },
    {
        id: 4,
        title: "C#/SQL Tuition Mangement System",
        description: "This is a C#/SQL project.",
        image: "/projects/tutionManagement.jpg",
        gitUrl: "https://github.com/jtuam102/testjs/tree/2ce19ea683dee081aa61ea56734ef7fa69fc6254/C%23%20Project"
    }, 

];

const Project =() =>{
    return(
        <div>
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 h-full">
                {projectData.map((project) =>(
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}>
                        
                    </ProjectCard>
                
                ))}

            </div>
            
        </div>
        

    );
}
export default Project;