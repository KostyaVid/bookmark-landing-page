import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';
import Button from '../../Button/Button';
import s from './ExtensionCard.module.scss';

export interface IExtensionCard {
  id: number;
  name: string;
  version: string;
  urlImg: string;
}

const ExtensionCard: FunctionComponent<IExtensionCard> = ({
  name,
  version,
  urlImg,
}: IExtensionCard) => {
  return (
    <motion.article
      className={s.ExtensionCard}
      whileInView={{ rotate: 360, transition: { duration: 0.2, type: 'spring', stiffness: 180 } }}
      viewport={{ once: true, amount: 1 }}>
      <img alt={name} src={urlImg} />
      <h4>Add to {name}</h4>
      <p>Minimum version {version}</p>
      <div className={s.line}></div>
      <Button isWide={true}>Add & Install Extension</Button>
    </motion.article>
  );
};

export default ExtensionCard;
