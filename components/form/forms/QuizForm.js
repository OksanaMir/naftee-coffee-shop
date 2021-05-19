import { Form, Button, Radio } from 'antd';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { QuizNavBar } from '../bar/QuizNavBar';
import { QuizBlockBtns } from '../buttons/QuizBlockBtns';
import styles from '../../../styles/QuizForm.module.scss';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const quiz = [
  {
    id: 0,
    question: 'Which brewing methods do you prefer at home?',
    instruction: 'Select one option',
    answers: [
      { value: 'French press', id: 0 },
      { value: 'Espresso', id: 1 },
      { value: 'Cold brew', id: 2 },
      { value: 'Coffee maker', id: 3 },
      { value: 'AeroPress', id: 4 },
      { value: 'Chemex', id: 5 },
      { value: 'Other', id: 6 },
    ],
  },

  {
    id: 1,
    question: 'How do you take your coffee?',
    instruction: 'Select one option',
    answers: [
      { value: 'Black', id: 0 },
      { value: 'Cream', id: 1 },
      { value: 'Sugar', id: 2 },
      { value: 'Decaf', id: 3 },
      { value: `I don't know`, id: 4 },
    ],
  },
  {
    id: 2,
    question: 'How many cups of coffee (8 oz) do you make at home each week?',
    instruction: 'Select one option',
    answers: [
      { value: 1, id: 0 },
      { value: 5, id: 1 },
      { value: 10, id: 2 },
      { value: 15, id: 3 },
      { value: 20, id: 4 },
      { value: 'Much more', id: 5 },
    ],
  },
  {
    id: 3,
    question: 'How light or dark do you like your coffee? ',
    instruction:
      'Select one option. 1 is the ligtest option. 2 is the darkest one',
    answers: [
      { value: 1, id: 0 },
      { value: 2, id: 1 },
      { value: 3, id: 2 },
      { value: 4, id: 3 },
      { value: 5, id: 4 },
      { value: `I don't know`, id: 5 },
    ],
  },
  {
    id: 4,
    question: 'Which of these best describes your favorite coffee?',
    instruction: 'Select one option',
    answers: [
      { value: 'Delicate', id: 0 },
      { value: 'Juicy', id: 1 },
      { value: 'Syrupy', id: 2 },
      { value: 'Heavy', id: 3 },
      { value: `I don't know`, id: 4 },
    ],
  },

  {
    id: 5,
    question: 'How bright do you like your coffee? ',
    instruction:
      'Select only one. 1 is the less bright option. 2 is the very bright one',
    answers: [
      { value: 1, id: 0 },
      { value: 2, id: 1 },
      { value: 3, id: 2 },
      { value: 4, id: 3 },
      { value: 5, id: 4 },
      { value: `I don't know`, id: 5 },
    ],
  },
  {
    id: 6,
    question: 'Which flavors do you most enjoy in your coffee?',
    instruction: 'Select all that apply',
    answers: [
      { value: 'Floral', id: 0 },
      { value: 'Fruity', id: 1 },
      { value: 'Brown sugar', id: 2 },
      { value: 'Toasted nut', id: 3 },
      { value: 'Chocolatey', id: 4 },
      { value: 'Earthy', id: 5 },
      { value: `I don't know`, id: 6 },
    ],
  },
  {
    id: 7,
    question: 'Which herbs and spices are you most drawn to?',
    instruction: 'Select all that apply',
    answers: [
      { value: 'Cinnamon', id: 0 },
      { value: 'Cardamon', id: 1 },
      { value: 'Chili', id: 2 },
      { value: 'Black pepper', id: 3 },
      { value: 'Basil', id: 4 },
      { value: 'Ginger', id: 5 },
      { value: 'Parsley', id: 6 },
      { value: 'Rosemary', id: 7 },
      { value: `I don't know`, id: 8 },
    ],
  },
  {
    id: 8,
    question: 'Which kind of chocolate do you prefer?',
    instruction: 'Select only one',
    answers: [
      { value: 'Dark', id: 0 },
      { value: 'Milk', id: 1 },
      { value: 'White', id: 2 },
      { value: `I don't like chocolate`, id: 3 },
    ],
  },
  {
    id: 9,
    question: 'Which salad dressing is your favorite?',
    instruction: 'Select only one',
    answers: [
      { value: 'Balsamic vinaigrette', id: 0 },
      { value: 'Ranch', id: 1 },
      { value: 'Olive oil and lemon', id: 2 },
      { value: 'Dijon vinaigrette', id: 3 },
      { value: 'Caesar', id: 4 },
      { value: 'Olive oil and vinegar', id: 5 },
      { value: `I don't know`, id: 6 },
    ],
  },
];

export function QuizForm({ onFinished }) {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();

  const [quizItemIndex, setQuizItemIndex] = useState(0);
  const [chosenAnswerValue, setChosenAnswerValue] = useState(
    quiz[quizItemIndex].answers[0].value,
  );
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setChosenAnswerValue(quiz[quizItemIndex].answers[0].value);
  }, [quizItemIndex]);

  const chooseOption = (e) => {
    setChosenAnswerValue(e.target.value);
  };

  const isLastQuizItem = quizItemIndex === quiz.length - 1;

  const onContinue = () => {
    console.log('ans', answers, chosenAnswerValue, quizItemIndex);
    setAnswers([...answers, [chosenAnswerValue, quiz[quizItemIndex].question]]);

    if (isLastQuizItem) {
      return;
    }

    console.log('ans', answers);
    // setChosenAnswerValue(quiz[quizItemIndex].answers[0].value);
    setQuizItemIndex(quizItemIndex + 1);
  };

  const sendAnswers = () => {
    const results = [...answers, [chosenAnswerValue, quizItemIndex]];
    console.log('send', results);
    onFinished();
  };
  return (
    <div className={styles.form}>
      <Form {...layout}>
        <QuizNavBar
          onContinue={onContinue}
          quizItemIndex={quizItemIndex + 1}
          length={quiz.length}
        />

        <h1>{quiz[quizItemIndex].question}</h1>
        <p>{quiz[quizItemIndex].instruction}</p>
        <Radio.Group
          defaultValue={quiz[quizItemIndex].answers[0].value}
          onChange={chooseOption}
        >
          {quiz[quizItemIndex].answers.map((answer) => (
            <Radio key={answer.id} value={answer.value}>
              {answer.value}
            </Radio>
          ))}
        </Radio.Group>
        {!isLastQuizItem && <QuizBlockBtns onContinue={onContinue} />}

        {isLastQuizItem && (
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={sendAnswers}>
              Find my coffee
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
}
