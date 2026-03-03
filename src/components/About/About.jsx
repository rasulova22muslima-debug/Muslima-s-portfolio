import style from '../About/About.module.scss'

const About = () => {
  return (
    <>
      <section className={style.about}>
        <div className={`container ${style.about__wrap}`}>
          <div className={style.about__left}>
            <p className={style.about__left_p}>Привет! Я</p>
            <h1 className={style.about__left_h}>Расулова Муслима</h1>
            <p className={style.about__left_p2}>Frontend разработчик и UI/UX дизайнер</p>
            <button href="#">Связаться со мной
            </button>
          </div>
          <div className={style.about__right}>
            {/* <img src="" alt="" /> */}
          </div>

        </div>
      </section>
    </>
  )
}

export default About