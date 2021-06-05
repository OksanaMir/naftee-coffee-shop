import { Form, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from '../../../styles/QuizBlockBtns.module.scss';
export function QuizBlockBtns({ onContinue }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={styles.btnContainer}>
        <Form.Item>
          <Button onClick={onContinue} type="primary" htmlType="submit">
            {t('quiz.continue')}
          </Button>
        </Form.Item>
      </div>
    </>
  );
}
