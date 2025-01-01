'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectsApi from "./projectsapi";
import { ReactNode } from "react";
import toast, { Toaster } from 'react-hot-toast';
import styles from './styles/projects.module.css'


function Projects() {
    const notify = () => toast.error('Preview for this project is not available.');

    return (
        <div id="projects" className={styles.projects}>
            <div className={styles.projectshead}>
                <p>Projects</p>
                <span> Things I&apos;ve built so far</span>
            </div>
            <div className={styles.projectsitems} id="projectssection">
                {
                    ProjectsApi.map((apis): ReactNode => {
                        const { key, name, description, stack, preview, github } = apis

                        return (

                            <div key={key} className={styles.item}>
                                <div className={styles.itemND}>
                                    <p>{name}</p>
                                    <span>{description}</span></div>
                                <div className={styles.itemO}>
                                    <p>Tech Stack : <span>{stack}</span></p>
                                    <div className={styles.links}>
                                        <div className={styles.linksi}>
                                            <FontAwesomeIcon icon={faLink} />
                                            {
                                                preview ? <a href={preview} target="blank">Live Prevew</a> :
                                                    <a onClick={notify} >Live Preview</a>
                                            }

                                        </div>
                                        <div className={styles.linksi}>
                                            <FontAwesomeIcon icon={faGithub} />
                                            <a href={github} target="blank">View Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
               
                


            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    )
}
export default Projects