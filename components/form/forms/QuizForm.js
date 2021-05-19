import { Form, Button, Radio } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QuizBlockBtns } from '../buttons/QuizBlockBtns';

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
      'French press',
      'Pour over',
      'Espresso',
      'Cold brew',
      'Coffee maker',
      'AeroPress',
      'Chemex',
      'Other',
    ],
  },

  {
    id: 1,
    question: 'How do you take your coffee?',
    instruction: 'Select one option',
    answers: ['Black', 'Cream', 'Sugar', 'Decaf', `I don't know`],
  },
  {
    id: 2,
    question: 'How many cups of coffee (8 oz) do you make at home each week?',
    instruction: 'Select one option',
    answers: [1, 5, 10, 15, 20, 'Much more'],
  },
  {
    id: 3,
    question: 'How light or dark do you like your coffee? ',
    instruction:
      'Select one option. 1 is the ligtest option. 2 is the darkest one',
    answers: [1, 2, 3, 4, 5, `I don't know`],
  },
  {
    id: 4,
    question: 'Which of these best describes your favorite coffee?',
    instruction: 'Select one option',
    answers: ['Delicate', 'Juicy', 'Syrupy', 'Heavy', , `I don't know`],
  },

  {
    id: 5,
    question: 'How bright do you like your coffee? ',
    instruction:
      'Select only one. 1 is the less bright option. 2 is the very bright one',
    answers: [1, 2, 3, 4, 5, , , `I don't know`],
  },
  {
    id: 6,
    question: 'Which flavors do you most enjoy in your coffee?',
    instruction: 'Select all that apply',
    answers: [
      'Floral',
      'Fruity',
      'Brown sugar',
      'Toasted nut',
      'Chocolatey',
      'Earthy',
      `I don't know`,
    ],
  },
  {
    id: 7,
    question: 'Which herbs and spices are you most drawn to?',
    instruction: 'Select all that apply',
    answers: [
      'Cinnamon',
      'Cardamon',
      'Chili',
      'Black pepper',
      'Basil',
      'Ginger',
      'Parsley',
      'Rosemary',
      `I don't know`,
    ],
  },
  {
    id: 8,
    question: 'Which kind of chocolate do you prefer?',
    instruction: 'Select only one',
    answers: ['Dark', 'Milk', 'White', `I don't like chocolate`],
  },
  {
    id: 9,
    question: 'Which salad dressing is your favorite?',
    instruction: 'Select only one',
    answers: [
      'Balsamic vinaigrette',
      'Ranch',
      'Olive oil and lemon',
      'Dijon vinaigrette',
      'Caesar',
      'Olive oil and vinegar',
      `I don't know`,
    ],
  },
];

export function QuizForm({ onFinished }) {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();

  const [answerChosenId, setAnswerChosenId] = useState(1);
  const [quizItemIndex, setQuizItemIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const chooseOption = (e) => {
    setAnswerChosenId(e.target.value);
  };

  const isLastQuizItem = quizItemIndex === quiz.length - 1;

  const onContinue = () => {
    console.log('ans', answers, answerChosenId, quizItemIndex);
    setAnswers([...answers, [answerChosenId, quizItemIndex]]);

    if (quizItemIndex === quiz.length - 1) {
      return;
    }

    console.log('ans', answers);

    setAnswerChosenId(1);
    setQuizItemIndex(quizItemIndex + 1);
  };

  const sendAnswers = () => {
    const results = [...answers, [answerChosenId, quizItemIndex]];
    console.log('send', results);
    onFinished();
  };
  return (
    <Form {...layout}>
      <h1>{quiz[quizItemIndex].question}</h1>
      <p>{quiz[quizItemIndex].instruction}</p>
      <Radio.Group value={answerChosenId} onChange={chooseOption}>
        {quiz[quizItemIndex].answers.map((answer, index) => (
          <Radio key={index} value={index + 1}>
            {answer}
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
  );
}
