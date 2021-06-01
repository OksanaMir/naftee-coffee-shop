import { Button, Form } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../styles/QuizNavBar.module.scss';

export function QuizNavBar({ onContinue, quizItemIndex, length }) {
  const router = useRouter();
  const goBackInHistory = () => router.back();
  return (
    <div className={styles.navigation}>
      <Form.Item noStyle>
        <Button onClick={goBackInHistory}>
          <span>Quit quiz</span>
        </Button>
      </Form.Item>
      <div>
        {quizItemIndex}/{length}
      </div>
      <Form.Item noStyle>
        <Button onClick={onContinue}>Skip question</Button>
      </Form.Item>
    </div>
  );
}
