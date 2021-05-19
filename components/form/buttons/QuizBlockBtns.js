import { Form, Button } from 'antd';

export function QuizBlockBtns({ onContinue }) {
  return (
    <>
      <Form.Item>
        <Button onClick={onContinue} type="primary" htmlType="submit">
          Continue
        </Button>
      </Form.Item>
    </>
  );
}
