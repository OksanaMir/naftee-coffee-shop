import { Form, Button, Radio, Popover } from 'antd';
import { useState, useEffect, useRef } from 'react';
import { useTranslation, i18n } from 'react-i18next';
import { QuizNavBar } from '../bar/QuizNavBar';
import { QuizBlockBtns } from '../buttons/QuizBlockBtns';
import { Loader } from '../../../components/ loader/Loader';
import { request } from '../../../lib/datoCMS';
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
export function QuizForm({ onFinished, answers, setAnswers, quiz }) {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();
  const [quizItemIndex, setQuizItemIndex] = useState(0);
  const [chosenAnswerValue, setChosenAnswerValue] = useState(
    quiz?.[quizItemIndex]?.option[0],
  );
  const [chosenAnswerIndex, setChosenAnswerIndex] = useState(0);
  const ref = useRef(null);
  const [chosenMethod, setChosenMetod] = useState(0);
  const [chosenAmount, setChosenAmount] = useState(0);
  const [chosenSort, setChosenSort] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //{ choice1: sort1, choice2: sort2, choice3: sort3, choice4: sort4 };
  useEffect(() => {
    setChosenAnswerValue(quiz[quizItemIndex]?.option[0]);
    form.setFieldsValue({ options: quiz[quizItemIndex]?.option[0] });
  }, [quizItemIndex]);
  useEffect(() => {

        setQuizItemIndex(0);
        setChosenAnswerValue(quiz?.[0]?.option[0]);
        form.setFieldsValue({
          options: quiz?.[0]?.option[0]
        })

  }, [quiz]);
  const chooseOption = (e) => {
    setChosenAnswerValue(e.target.value);
    setChosenAnswerIndex(e.target.index);
  };
  const isLastQuizItem = quizItemIndex === quiz.length - 1;
  const onContinue = () => {
    // console.log('on-continue');
    // console.log('sort counts', chosenSort);
    // console.log('ans-1', answers, chosenAnswerValue, quizItemIndex);
    setAnswers([
      ...answers,
      quiz?.[quizItemIndex]?.recommendation?.[chosenAnswerIndex],
    ]);
    if (isLastQuizItem) {
      return;
    }
    // console.log('ans-2', answers);
    // setChosenAnswerValue(quiz[quizItemIndex].option[0].value);
    setQuizItemIndex(quizItemIndex + 1);
  };
  // const chooseInstruction = (e) => {
  //   setChosenAnswerIndex(e.target.index);
  // };
  const sendAnswers = () => {
    const results = [
      ...answers,
      quiz?.[quizItemIndex]?.recommendation?.[chosenAnswerIndex],
    ];

    let counts = {};
    let maxCount = 0;
    let maxValue = '';

    results.forEach((result) => {
      const count = 1 + (counts[result] || 0);
      counts[result] = count;
      if (count >= maxCount) {
        maxCount = count;
        maxValue = '' + result;
      }
    });

    console.log('send', results, counts, maxValue);
    onFinished({
      package: results[2],
      method: results[0],
      coffeSort: results[4].id,
    });
  };
  const FormQuestion = () => {
    return <h1>{quiz?.[quizItemIndex]?.question}</h1>;
  };
  // console.log(
  //   quiz?.[quizItemIndex]?.instruction?.[chosenAnswerIndex],
  //   'popover',
  // );
  // console.log(chosenAnswerIndex, 'answer');
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                  <div
                    key={option}
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
                  </div>
                ))}
              </Radio.Group>
            </Form.Item>
            {!isLastQuizItem && <QuizBlockBtns onContinue={onContinue} />}
            {isLastQuizItem && (
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={sendAnswers}>
                  {t('quiz.finish')}
                </Button>
              </Form.Item>
            )}
          </Form>
        </div>
      )}
    </>
  );
}

