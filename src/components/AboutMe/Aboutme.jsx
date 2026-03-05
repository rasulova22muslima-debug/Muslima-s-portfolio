import { useTranslation } from 'react-i18next';
import style from '../AboutMe/Aboutme.module.scss'

const Aboutme = () => {

    const { t } = useTranslation();
    return (
        <section id="about" className={style.aboutme}>
            <div className={`container ${style.aboutme__wrap}`}>
                <h1 className={style.aboutme_title}>{t("about")}</h1>
                <div className={style.aboutme__desc}>
                    <div className={style.aboutme__desc_text}>
                        <p className={style.aboutme__desc_p1}>{t("p1")}</p>
                        <p className={style.aboutme__desc_p1}>{t("p2")}</p>
                        <p className={style.aboutme__desc_p3}>{t("p3")}</p>
                    </div>
                    <div className={style.aboutme__desc_link}>
                        <a href="mailto:rasulova22muslima@gmail.com" className={style.aboutme__contact_item}>
                            <span className="icon">📧</span> rasulova22muslima@gmail.com
                        </a>
                        <a href="tel:+998910371990" className={style.aboutme__contact_item}>
                            <span className="icon">📱</span> +998 (91) 037-19-90
                        </a>
                        <div className={style.aboutme__contact_item}>
                            <span className="icon">📍</span>{t("loc2")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme;