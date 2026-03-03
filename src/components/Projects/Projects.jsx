import style from "./Projects.module.scss";
import { Github, ExternalLink } from "lucide-react";

const Projects = ({ projects = [] }) => {
  return (
    <section className={style.projects} id="projects">
      <div className={`${style.projects__wrap} container`}>
        <h2 className={style.projects__title}>Мои проекты</h2>
        <p className={style.projects__text}>Избранные работы из моего портфолио</p>

        <div className={style.projects__grid}>
          {projects.map((project, index) => (
            <article key={index} className={style.card}>
              <div className={style.card__image}>
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className={style.card__content}>
                <h3 className={style.card__name}>{project.title}</h3>
                <p className={style.card__descr}>{project.description}</p>
                
                <div className={style.card__tags}>
                  {project.tags?.map((tag, i) => (
                    <span key={i} className={style.tag}>{tag}</span>
                  ))}
                </div>

                <div className={style.card__footer}>
                  <a href={project.link} className={style.link} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} className={style.link__icon} />
                    Посмотреть проект
                  </a>

                  <a href={project.github} className={style.github} target="_blank" rel="noreferrer">
                    <Github size={20} className={style.github__icon} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;