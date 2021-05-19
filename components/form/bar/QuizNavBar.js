import { Button, Form } from 'antd';
import Link from 'next/link';

export function QuizNavBar({ onContinue, quizItemIndex, length }) {
  return (
    <Form.Item>
      <span>
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
  );
}
