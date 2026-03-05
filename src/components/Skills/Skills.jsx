import { useTranslation } from "react-i18next";
import style from "./Skills.module.scss"

const Skills = ({ items }) => {
  const { t } = useTranslation();
  return (
    <section id="skills" className={style.skills}>
      <div className={`${style.skills__wrap} container`}>
        <h1 className={style.skills__title}>{t("mySkills")}</h1>
        <p className={style.skills__text}>{t("skills-p")}</p>
        
        <div className={style.skills__grid}>
          {items && items.map((category, index) => (
            <div key={index} className={style.card}>
              <h3 className={style.card__title}>{category.title}</h3>
              <ul className={style.card__list}>
                {category.skills.map((skill, i) => (
                  <li key={i} className={style.card__item}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;