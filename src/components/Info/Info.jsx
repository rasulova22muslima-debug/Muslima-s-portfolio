import { useTranslation } from "react-i18next";
import style from "./Info.module.scss";
import { Github, Linkedin, Instagram } from "lucide-react";

const Info = ({ contacts }) => {
   const { t } = useTranslation();
  return (
    <section id="contacts" className={style.info}>
      <div className={style.info__wrap}>
        <h2 className={style.info_title}>{t("GetInTouch")}</h2>
        <p className={style.info_text}>{t("GetInTouch-p")}</p>

        <div className={style.info_card}>
          <h3 className={style.info_card_title}>{t("contactInfo")}</h3>
          <div className={style.info_grid}>
            {contacts.map((item) => (
              <div key={item.id} className={style.info_item}>
                <div className={style.info_icon}>{item.icon}</div>
                <span className={style.info_label}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} className={style.info_value}>{item.value}</a>
                ) : (
                  <span className={style.info_value}>{item.value}</span>
                )}
              </div>
            ))}
          </div>

          <div className={style.info_divider}></div>

          <div className={style.info_socials}>
            <p className={style.info_socials_text}>{t("SocialMedia")}</p>
            <div className={style.info_socials_links}>
              <a href="#" className={style.info_social_item}><Github size={20} /></a>
              <a href="#" className={style.info_social_item}><Linkedin size={20} /></a>
              <a href="#" className={style.info_social_item}><Instagram size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;