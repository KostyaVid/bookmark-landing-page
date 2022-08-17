import { ChangeEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../../Button/Button';
import s from './FooterHeader.module.scss';

const FooterHeader = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    if (
      !e.target.value.match(
        /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/i,
      )
    ) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
    if (e.target.value === '') setIsInvalid(false);

    setInputValue(e.target.value);
  }
  return (
    <div className={s.footerHeader}>
      <div className={s.footerHeaderContainer}>
        <div className={s.text}>35,000 + ALREADY JOINED</div>
        <h4 className={s.title}>Stay up-to-date with what we're doing</h4>
        <div className={s.form}>
          <div className={s.inputWithWarning}>
            <input
              placeholder="Enter your email address"
              maxLength={33}
              value={inputValue}
              onChange={onChangeInput}
              className={s.input}
            />
            <AnimatePresence>
              {isInvalid && (
                <>
                  <motion.div
                    className={s.warning}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    !
                  </motion.div>
                  <motion.div
                    className={s.warningText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <i>Whoops, male sure it's on email?</i>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          <Button color="secondary">Contact US</Button>
        </div>
      </div>
    </div>
  );
};

export default FooterHeader;
