import { Form, Button, Radio } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

var quiz = [
  {
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
    question: 'How do you take your coffee?',
    instruction: 'Select one option',
    answers: ['Black', 'Cream', 'Sugar', 'Decaf', `I don't know`],
  },
  {
    question: 'How many cups of coffee (8 oz) do you make at home each week?',
    instruction: 'Select one option',
    answers: [1, 5, 10, 15, 20, 'Much more'],
  },
  {
    question: 'How light or dark do you like your coffee? ',
    instruction:
      'Select one option. 1 is the ligtest option. 2 is the darkest one',
    answers: [1, 2, 3, 4, 5, `I don't know`],
  },
  {
    question: 'Which of these best describes your favorite coffee?',
    instruction: 'Select one option',
    answers: ['Delicate', 'Juicy', 'Syrupy', 'Heavy', , `I don't know`],
  },

  //Commented for easier testing

  // {
  //   question: 'How bright do you like your coffee? ',
  //   instruction:
  //     'Select only one. 1 is the less bright option. 2 is the very bright one',
  //   answers: [1, 2, 3, 4, 5, , , `I don't know`],
  // },
  // {
  //   question: 'Which flavors do you most enjoy in your coffee?',
  //   instruction: 'Select all that apply',
  //   answers: [
  //     'Floral',
  //     'Fruity',
  //     'Brown sugar',
  //     'Toasted nut',
  //     'Chocolatey',
  //     'Earthy',
  // `I don't know`
  //   ],
  // },
  // {
  //   question: 'Which herbs and spices are you most drawn to?',
  //   instruction: 'Select all that apply',
  //   answers: [
  //     'Cinnamon',
  //     'Cardamon',
  //     'Chili',
  //     'Black pepper',
  //     'Basil',
  //     'Ginger',
  //     'Parsley',
  //     'Rosemary',
  //  `I don't know`
  //   ],
  // },
  // {
  //   question: 'Which kind of chocolate do you prefer?',
  //   instruction: 'Select only one',
  //   answers: ['Dark', 'Milk', 'White', `I don't like chocolate`],
  // },
  // {
  //   question: 'Which salad dressing is your favorite?',
  //   instruction: 'Select only one',
  //   answers: [
  //     'Balsamic vinaigrette',
  //     'Ranch',
  //     'Olive oil and lemon',
  //     'Dijon vinaigrette',
  //     'Caesar',
  //     'Olive oil and vinegar',
  //  `I don't know`
  //   ],
  // },
];

function QuizBlockBtns({ show, onContinue }) {
  return show ? (
    <>
      <Form.Item>
        <Button onClick={onContinue} type="primary" htmlType="submit">
          Continue
        </Button>
      </Form.Item>

      {/* <Form.Item>
        <Button onClick={onContinue} type="primary" htmlType="submit">
          I'm not sure. Skip.
        </Button>
      </Form.Item> */}
    </>
  ) : null;
}

export function QuizForm({ onFinished }) {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();

  const [chosen, setChosen] = useState(1);
  const [blockIndex, setBlockIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const chooseOption = (e) => {
    setChosen(e.target.value);
  };

  const lastBlock = () => blockIndex === quiz.length - 1;

  const onContinue = () => {
    console.log('ans', answers, chosen, blockIndex);
    setAnswers([...answers, [chosen, blockIndex]]);

    if (blockIndex == quiz.length - 1) {
      return;
    }

    console.log('ans', answers);

    setChosen(1);
    setBlockIndex(blockIndex + 1);
  };

  const sendAnswers = () => {
    const results = [...answers, [chosen, blockIndex]];
    console.log('send', results);
    onFinished();
  };

  return (
    <Form {...layout}>
      <h1>{quiz[blockIndex].question}</h1>
      <p>{quiz[blockIndex].instruction}</p>
      <Radio.Group value={chosen} onChange={chooseOption}>
        {quiz[blockIndex].answers.map((txt, i) => (
          <Radio key={i} value={i + 1}>
            {txt}
          </Radio>
        ))}
      </Radio.Group>

      <QuizBlockBtns show={!lastBlock()} onContinue={onContinue} />

      {lastBlock() ? (
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={sendAnswers}>
            Find my coffee
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
}
