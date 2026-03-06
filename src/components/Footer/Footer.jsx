import React from 'react';
import style from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

const Footer = ({ navItems, contactItems }) => {
   const { t } = useTranslation();

  return (
    <footer className={style.footer}>
      <div className={style.footer__wrap}>
        <div className={style.footer_brand}>
          <h2 className={style.footer_logo}>{t("logo")}</h2>
          <p className={style.footer_desc}>
           {t("footerInfo")}
          </p>
        </div>
        <div className={style.footer_nav}>
          <h3 className={style.footer_title}>{t("navigation")}</h3>
          <ul className={style.footer_list}>
            {navItems.map((item, index) => (
              <li key={index} className={style.footer_item}>
                <a href={item.href} className={style.footer_link}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.footer_contacts}>
          <h3 className={style.footer_title}>{t("contacts")}</h3>
          <ul className={style.footer_list}>
            {contactItems.map((item) => (
              <li key={item.id} className={style.footer_item}>
                {item.href ? (
                  <a href={item.href} className={style.footer_link}>
                    {item.value}
                  </a>
                ) : (
                  <span className={style.footer_text}>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;