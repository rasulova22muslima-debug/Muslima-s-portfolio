import style from '../AboutMe/Aboutme.module.scss'

const Aboutme = () => {
    return (
        <section id="about" className={style.aboutme}>
            <div className={`container ${style.aboutme__wrap}`}>
                <h1 className={style.aboutme_title}>Обо мне</h1>
                <div className={style.aboutme__desc}>
                    <div className={style.aboutme__desc_text}>
                        <p className={style.aboutme__desc_p1}>Привет! Меня зовут Муслима, я frontend разработчик. Моя страсть — создание красивых и функциональных веб-приложений, которые радуют пользователей.</p>
                        <p className={style.aboutme__desc_p1}>Я специализируюсь на React, JavaScript и современных веб-технологиях. Люблю работать над сложными проектами и всегда стремлюсь к совершенству в каждой детали.</p>
                        <p className={style.aboutme__desc_p3}>Когда я не программирую, я увлекаюсь дизайном, изучаю новые технологии и делюсь знаниями с сообществом разработчиков.</p>
                    </div>
                    <div className={style.aboutme__desc_link}>
                        <a href="mailto:rasulova22muslima@gmail.com" className={style.aboutme__contact_item}>
                            <span className="icon">📧</span> rasulova22muslima@gmail.com
                        </a>
                        <a href="tel:+998910371990" className={style.aboutme__contact_item}>
                            <span className="icon">📱</span> +998 (91) 037-19-90
                        </a>
                        <div className={style.aboutme__contact_item}>
                            <span className="icon">📍</span> Ташкент, Узбекистан
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme;