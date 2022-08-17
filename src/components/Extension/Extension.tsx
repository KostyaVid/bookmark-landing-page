import s from './Extension.module.scss';
import ExtensionCard, { IExtensionCard } from './ExtensionCard/ExtensionCard';

const ExtensionCards: Array<IExtensionCard> = [
  { id: 0, name: 'Chrome', version: '62', urlImg: './images/logo-chrome.svg' },
  { id: 1, name: 'Firefox', version: '55', urlImg: './images/logo-firefox.svg' },
  { id: 2, name: 'Opera', version: '46', urlImg: './images/logo-opera.svg' },
];

const Extension = () => {
  return (
    <section className={s.extension + ' container'}>
      <h3>Download the extension</h3>
      <p>
        We've got more browsers in the pipeline. Please do let us know if you've got a favourite
        you'd like us to prioritize.
      </p>
      <div className={s.cards}>
        {ExtensionCards.map((card) => (
          <ExtensionCard {...ExtensionCards[card.id]} key={card.id} />
        ))}
      </div>
    </section>
  );
};

export default Extension;
