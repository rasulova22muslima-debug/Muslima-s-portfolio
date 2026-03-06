import { useTranslation } from 'react-i18next'
import style from '../About/About.module.scss'
import { photo } from '../../utilities/reExport';
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={style.about}>
        <div className={`container ${style.about__wrap}`}>
          <div className={style.about__left}>
            <p className={style.about__left_p}>{t("dis")}</p>
            <h1 className={style.about__left_h}>{t("logo")}</h1>
            <p className={style.about__left_p2}>{t("dis2")}</p>
            <button className={style.about__left_btn}><a href="#contacts">
              {t("btn")}
            </a>
            </button>
          </div>
          <div className={style.about__right}>
            <img src={photo} alt="" />
          </div>

        </div>
      </section>
    </>
  )
}

export default About