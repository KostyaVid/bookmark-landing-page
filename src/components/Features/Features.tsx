import s from './Features.module.scss';
import FeaturesMenu from './FeaturesMenu/FeaturesMenu';

const Features = () => {
  return (
    <section className={s.features + '  container'}>
      <h2>Features</h2>
      <p className={s.textTitle}>
        Our aim is to make it quick and easy for you to access your favourite websites. Your
        bookmarks sync between your devices so you can access them on the go.
      </p>
      <FeaturesMenu />
    </section>
  );
};

export default Features;
