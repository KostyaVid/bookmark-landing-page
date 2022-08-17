import s from './Questions.module.scss';
import Question, { IQuestion } from './Question/Question';
import Button from '../Button/Button';

const questions: Array<IQuestion> = [
  {
    id: 0,
    title: 'What is Bookmark?',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit!',
  },
  {
    id: 1,
    title: 'How can I request a new browser?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut reiciendis et maiores officia velit provident quidem dolorem minima, labore dignissimos perferendis totam tempore at placeat consequuntur ratione? Nam, natus?',
  },
  {
    id: 2,
    title: 'Is there a mobile app?',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit!',
  },
  {
    id: 3,
    title: 'What about other Chromium browsers?',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit!',
  },
];

const Questions = () => {
  return (
    <section className={s.questions + ' container'}>
      <h3>Frequently Asked Questions</h3>
      <p>
        Here are some of our FAQs. If you have any other questions you'd like answered please feel
        free to email us.
      </p>
      {questions.map((quest) => (
        <Question {...quest} key={quest.id} />
      ))}
      <div className={s.button}>
        <Button>More Info</Button>
      </div>
    </section>
  );
};

export default Questions;
