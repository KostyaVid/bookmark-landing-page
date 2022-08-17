import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import cn from 'classnames';
import s from './FeaturesMenu.module.scss';
import Card from './Card/Card';

export interface ICard {
  id: number;
  name: string;
  title: string;
  description: string;
  urlImage: string;
}

const cards: Array<ICard> = [
  {
    id: 0,
    name: 'Simple Bookmarking',
    title: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    urlImage: './images/illustration-features-tab-1.svg',
  },
  {
    id: 1,
    name: 'Speedy Searching',
    title: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    urlImage: './images/illustration-features-tab-2.svg',
  },
  {
    id: 2,
    name: 'Easy Sharing',
    title: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    urlImage: './images/illustration-features-tab-3.svg',
  },
];

const FeaturesMenu = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className={s.featuresMenu}>
      <div className={s.featuresMenuItems}>
        {cards.map((item) => (
          <div
            key={item.id}
            className={cn(s.itemName, { [s.activeItemName]: item.id === activeItem })}
            onClick={() => {
              setActiveItem(item.id);
            }}>
            <div className={s.itemNameInner}>
              {item.name}
              {item.id === activeItem && (
                <motion.div className={s.line} layoutId="activeItem"></motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Card {...cards[activeItem]} />
    </div>
  );
};

export default FeaturesMenu;
