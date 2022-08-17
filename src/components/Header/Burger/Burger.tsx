import cn from 'classnames';
import s from './Burger.module.scss';

interface IBurger {
  onClick: () => void;
  activeMobileMenu: boolean;
}

const Burger = ({ onClick, activeMobileMenu }: IBurger) => {
  const mainCN = cn(s.burger, { [s._active]: activeMobileMenu });
  function openClick() {
    if (onClick) onClick();
  }

  return (
    <div className={mainCN} onClick={openClick}>
      <span></span>
    </div>
  );
};

export default Burger;
