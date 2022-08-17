import Button from '../Button/Button';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero + ' container'}>
      <div className={s.image}>
        <img className={s.laptop} src="./images/illustration-hero.svg" alt="laptop"></img>
        <div className={s.laptopBG}></div>
      </div>
      <div className={s.text}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open a new browser tab
          and see your sites load instantly. Try it for free.
        </p>
        <div className={s.buttons}>
          <Button>Get it on Chrome</Button>
          <Button color="outline">Get it on Firefox</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
