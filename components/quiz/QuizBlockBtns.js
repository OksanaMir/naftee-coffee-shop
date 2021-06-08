import { Form, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/QuizBlockBtns.module.scss';
import { useRouter } from 'next/router';
export function QuizBlockBtns({ onContinue }) {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <div className={styles.btnContainer}>
        <Form.Item>
          <Button onClick={onContinue} type="primary" htmlType="submit">
            {t('quiz.continue', {
              lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
            })}
          </Button>
        </Form.Item>
      </div>
    </>
  );
}
