import styles from "./ProjectContainer.module.css";

interface ProjectContainerProps {
    title: string;
    description: string;
    imagePath: string;
    percentageOverlay: string;
}

function ProjectContainer({ title, description, imagePath, percentageOverlay } : ProjectContainerProps) {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.mainElementsContainer}>
                <img
                    src={imagePath}
                    alt="Project Image"
                    className={styles.backgroundImage}
                />
                <div className={styles.overlay} style={{width: percentageOverlay}}></div>
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}
export default ProjectContainer;