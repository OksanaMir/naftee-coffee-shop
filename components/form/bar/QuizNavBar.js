import { Button, Form } from 'antd';
import Link from 'next/link';
import styles from '../../../styles/QuizNavBar.module.scss';

export function QuizNavBar({ onContinue, quizItemIndex, length }) {
  return (
    <div>
      <Form.Item className={styles.navigation}>
        <span className={styles.navigation}>
          <Button type="primary" htmlType="submit">
            <Link href="/">Quit quiz</Link>
          </Button>

          <div>
            {quizItemIndex}/{length}
          </div>
          <Button onClick={onContinue} type="primary" htmlType="submit">
            Skip question
          </Button>
        </span>
      </Form.Item>
    </div>
  );
}
