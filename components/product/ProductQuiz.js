import Image from 'next/image';
import {GoToDetailButton} from '../form/button/GoToDetailButton';

export function ProductQuiz({ product, method, quantity }) {
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
        <p>chut: {taste}</p>
        <p>metoda: {method}</p>
        <p>{quantity}g baleni</p>
        <p>{price} Kc</p>
        <GoToDetailButton id={id} />
      </>
    </article>
  );
}
