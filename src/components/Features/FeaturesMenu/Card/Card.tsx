import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Button from '../../../Button/Button';
import { ICard } from '../FeaturesMenu';
import s from './Card.module.scss';

const Card = ({ title, description, urlImage }: ICard) => {
  const controlsAnimateBG = useAnimation();
  const controlsAnimateLaptop = useAnimation();
  const controlsAnimateText = useAnimation();

  useEffect(() => {
    controlsAnimateBG.set({ x: '-100%', opacity: 0 });
    controlsAnimateLaptop.set({ scale: 0, opacity: 0 });
    controlsAnimateText.set({ x: '100%', opacity: 0 });
    controlsAnimateBG.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
    controlsAnimateLaptop.start({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    });
    controlsAnimateText.start((i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.5 },
    }));
  }, [title]);

  return (
    <article className={s.card}>
      <div className={s.image}>
        <motion.img
          className={s.laptop}
          src={urlImage}
          alt="laptop"
          animate={controlsAnimateLaptop}
        />
        <motion.div className={s.laptopBG} animate={controlsAnimateBG}></motion.div>
      </div>
      <div className={s.text}>
        <motion.h3 animate={controlsAnimateText} custom={0}>
          {title}
        </motion.h3>
        <motion.p animate={controlsAnimateText} custom={1}>
          {description}
        </motion.p>
        <motion.div className={s.button} animate={controlsAnimateText} custom={2}>
          <Button>More Info</Button>
        </motion.div>
      </div>
    </article>
  );
};

export default Card;
