import React from 'react';
import style from './Footer.module.scss';

const Footer = ({ navItems, contactItems }) => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__wrap}>
        
        {/* Колонка 1: Брендинг */}
        <div className={style.footer_brand}>
          <h2 className={style.footer_logo}>Расулова Муслима</h2>
          <p className={style.footer_desc}>
            Frontend разработчик и UI/UX дизайнер, создающая красивые и функциональные веб-приложения.
          </p>
        </div>

        {/* Колонка 2: Навигация */}
        <div className={style.footer_nav}>
          <h3 className={style.footer_title}>Навигация</h3>
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

        {/* Колонка 3: Контакты */}
        <div className={style.footer_contacts}>
          <h3 className={style.footer_title}>Контакты</h3>
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