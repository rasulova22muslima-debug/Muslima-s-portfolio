import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss";

const Header = ({ navItems = [] }) => {
    const [isDark, setIsDark] = useState(false);
const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <header className={styles.header}>
            <nav className={`${styles.header__nav} container`}>
                <a className={styles.header__nav_logo} href='#'>Расулова Муслима</a>
             
                <ul className={`${styles.header__nav_list} ${isOpen ? styles.active : ''}`}>
                    {navItems.map((link, index) => (
                        <li key={index} className={styles.header__nav_list_item}>
                            <a 
                                href={link.href} 
                                className={styles.header__nav_list_item_link}
                                onClick={() => setIsOpen(false)} // Закрыть меню при клике
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.header__nav_controls}>
                    <button className={styles.themeToggle} onClick={() => setIsDark(!isDark)}>
                        {isDark ? (
                            <i className="far fa-moon-stars"></i>
                        ) : (
                            <i className="far fa-sun-haze"></i>
                        )}
                    </button>
                    <span className={styles.header__nav_lang}>RU</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;