import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, FunctionComponent } from 'react';
import s from './Question.module.scss';

export interface IQuestion {
  id: number;
  title: string;
  description: string;
}

const Question: FunctionComponent<IQuestion> = ({ id, title, description }: IQuestion) => {
  const [activeQuestion, SetActiveQuestion] = useState(false);
  const animateArrow = useAnimation();

  useEffect(() => {
    if (activeQuestion) {
      animateArrow.start({ rotate: 180, stroke: '#fa5757' });
    } else {
      animateArrow.start({ rotate: 0, stroke: '#5267DF' });
    }
  }, [activeQuestion]);

  return (
    <div className={s.list}>
      <div
        className={s.title}
        onClick={() => {
          if (activeQuestion) {
            SetActiveQuestion(false);
          } else {
            SetActiveQuestion(true);
          }
        }}>
        <h5>{title}</h5>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
          <motion.path
            fill="none"
            stroke="#5267DF"
            strokeWidth="3"
            d="M1 1l8 8 8-8"
            animate={animateArrow}
          />
        </svg>
      </div>
      {activeQuestion && (
        <motion.p
          layout
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1, transition: { duration: 0.4 } }}>
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default Question;
