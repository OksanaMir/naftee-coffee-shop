import {Button, Form, Popover, Radio} from 'antd';
import {useEffect, useRef, useState} from 'react';
import {i18n, useTranslation} from 'react-i18next';
import {QuizNavBar} from '../bar/QuizNavBar';
import {QuizBlockBtns} from '../buttons/QuizBlockBtns';
import {request} from '../../../lib/datoCMS';
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
export function QuizForm({ onFinished }) {
  const {  i18n } = useTranslation();
  const [form] = Form.useForm();
  const [quiz, setQuiz] = useState([]);
  const [quizItemIndex, setQuizItemIndex] = useState(0);
  const [chosenAnswerValue, setChosenAnswerValue] = useState(
    quiz?.[quizItemIndex]?.option[0],
  );
  const [chosenAnswerIndex, setChosenAnswerIndex] = useState(0);
  const ref = useRef(null);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    setChosenAnswerValue(quiz[quizItemIndex]?.option[0]);
    form.setFieldsValue({ options: quiz[quizItemIndex]?.option[0] });
  }, [quizItemIndex]);

  useEffect(() => {
    request({
      query: QUIZ_QUERY,
      variables: { locale: i18n.language },
    }).then((response) => {
      setQuizItemIndex(0);
      setQuiz(response?.allCoffeeQuizzes);
      setChosenAnswerValue(response?.allCoffeeQuizzes?.[0]?.option[0]);

      form.setFieldsValue({
        options: response?.allCoffeeQuizzes?.[0]?.option[0],
      });
    });
  }, [i18n.language]);
  const chooseOption = (e) => {
    setChosenAnswerValue(e.target.value);
    setChosenAnswerIndex(e.target.index);
  };
  const isLastQuizItem = quizItemIndex === quiz.length - 1;
  const onContinue = () => {
    setAnswers([...answers, [chosenAnswerValue, quiz[quizItemIndex].question]]);
    if (isLastQuizItem) {
      return;
    }
    console.log('ans', answers);
    setQuizItemIndex(quizItemIndex + 1);
  };

  const sendAnswers = () => {
    const results = [
      ...answers,
      [chosenAnswerValue, quiz[quizItemIndex].question],
    ];
    console.log('send', results);
    onFinished();
  };
  const FormQuestion = () => {
    return <h1>{quiz?.[quizItemIndex]?.question}</h1>;
  };

  return (
    <div className={styles.form}>
      <Form form={form} {...layout}>
        <QuizNavBar
          onContinue={onContinue}
          quizItemIndex={quizItemIndex + 1}
          length={quiz.length}
        />
        <FormQuestion />
        <Form.Item shouldUpdate name="options" noStyle>
          <Radio.Group onChange={chooseOption}>
            {quiz?.[quizItemIndex]?.option?.map((option, index) => (
              <div key={option}
                className={styles.radioWrapper}
                ref={ref}
                id={`popoverArea${index}`}
              >
                {quiz?.[quizItemIndex]?.instruction?.[chosenAnswerIndex] ? (
                  <Popover
                    placement="right"
                    title={undefined}
                    content={
                      <p>
                        {
                          quiz?.[quizItemIndex]?.instruction?.[
                            chosenAnswerIndex
                          ]
                        }
                      </p>
                    }
                    trigger={['click']}
                    // visible={true}
                    getPopupContainer={() =>
                      document.getElementById(`popoverArea${index}`)
                    }
                    align={{ offset: [ref?.current?.clientWidth, 0] }}
                  >
                    <Radio key={option.id} value={option} index={index}>
                      {option}
                    </Radio>
                  </Popover>
                ) : (
                  <Radio key={option.id} value={option} index={index}>
                    {option}
                  </Radio>
                )}
                g{' '}
              </div>
            ))}
          </Radio.Group>
        </Form.Item>
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
const QUIZ_QUERY = `query QuizQuery($locale: SiteLocale)
{
  allCoffeeQuizzes(locale:$locale) {
      id
      question
      option
      instruction
      recommendation
    } 
}`;
