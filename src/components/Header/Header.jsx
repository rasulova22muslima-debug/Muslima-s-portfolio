import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss";
import { useTranslation } from 'react-i18next';

const Header = ({ navItems = [] }) => {
    const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
    const [isOpen, setIsOpen] = useState(false);
    const { i18n, t } = useTranslation();

    const changeLang = () => {
        const newLang = (i18n.language || "ru").includes("ru") ? "en" : "ru";
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isDark]);

    return (
        <header className={styles.header}>
            <nav className={`${styles.header__nav} container`}>
                <a className={styles.header__nav_logo} href='#'>{t("logo")}</a>

                <ul className={`${styles.header__nav_list} ${isOpen ? styles.active : ''}`}>
                    {navItems.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className={styles.link} onClick={() => setIsOpen(false)}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.header__nav_controls}>
                    <button className={styles.themeToggle} onClick={() => setIsDark(!isDark)}>
                        {isDark ? (
                            <i className={`fas fa-sun ${styles.sunIcon}`}></i>
                        ) : (
                            <i className="fas fa-moon"></i>
                        )}
                    </button>
                    
                    <button className={styles.langBtn} onClick={changeLang}>
                        {i18n.language?.includes('en') ? 'EN' : 'RU'}
                    </button>

                    <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
                        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;