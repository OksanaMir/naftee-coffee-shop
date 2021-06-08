import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { GoToDetailButton } from '../form/button/GoToDetailButton';

export function ProductQuiz({ product, method, quantity }) {
  const router = useRouter();
  const { t } = useTranslation();
  const { productName, horizontalProductView, id, quantityWeight, taste } =
    product || {};
  const price = quantityWeight?.productData?.find(
    (it) => it?.weight === quantity,
  )?.price;

  return (
    <article>
      <>
        <h1>{productName}</h1>
        {horizontalProductView && (
          <Image
            src={horizontalProductView?.url}
            alt={horizontalProductView?.alt}
            width={horizontalProductView?.width}
            height={horizontalProductView?.height}
          />
        )}
        <p>
          {t('quiz.sort', {
            lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
          })}
          {taste}
        </p>
        <p>
          {t('quiz.method', {
            lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
          })}
          {method}
        </p>
        <p>
          {quantity}
          {t('quiz.package', {
            lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
          })}
        </p>
        <p>
          {price}{' '}
          {t('quiz.price', {
            lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
          })}
        </p>
        <GoToDetailButton id={id} />
      </>
    </article>
  );
}
