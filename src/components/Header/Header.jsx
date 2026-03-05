import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss";
import { useTranslation } from 'react-i18next';

const Header = ({ navItems = [] }) => {
    // 1. Инициализируем состояние из localStorage, чтобы тема сохранялась
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const [isOpen, setIsOpen] = useState(false);

    const { i18n, t } = useTranslation();

    const changeLang = () => {
        const currentLang = i18n.language || "ru";
        const newLang = currentLang.includes("ru") ? "en" : "ru";
        i18n.changeLanguage(newLang);
    };

    // 2. Следим за изменением isDark и обновляем атрибут HTML + localStorage
    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isDark]);

    return (
        <header className={styles.header}>
            <nav className={`${styles.header__nav} container`}>
                <a className={styles.header__nav_logo} href='#'>{t("logo")}</a>

                {/* Бургер-меню для мобилок (добавил кнопку, так как она была в стилях, но не в коде) */}
                <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
                    <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </button>

                <ul className={`${styles.header__nav_list} ${isOpen ? styles.active : ''}`}>
                    {navItems.map((link, index) => (
                        <li key={index} className={styles.header__nav_list_item}>
                            <a
                                href={link.href}
                                className={styles.header__nav_list_item_link}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.header__nav_controls}>
                    <button
                        className={styles.themeToggle}
                        onClick={() => setIsDark(!isDark)}
                        aria-label="Toggle theme"
                    >
                        {/* Используем обычные иконки FontAwesome для надежности */}
                        {isDark ? (
                            <i className={`fas fa-sun ${styles.sunIcon}`}></i> // Солнце для перехода в светлую
                        ) : (
                            <i className="fas fa-moon"></i> // Луна для перехода в темную
                        )}
                    </button>
                    <button className="header__btn" onClick={changeLang}>
                        {/* Проверяем через includes, чтобы не было ошибки undefined */}
                        {i18n.language?.includes('en') ? 'EN' : 'RU'}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;