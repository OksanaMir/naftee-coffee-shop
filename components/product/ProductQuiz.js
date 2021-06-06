import Image from 'next/image';

export function ProductQuiz({ product, method, quantity }) {
  const price = quantity;
  return (
    <article>
      <Image
        src={product.horizontalProductView.url}
        alt={product.horizontalProductView.alt}
        width={product.horizontalProductView.width}
        height={product.horizontalProductView.height}
      />
      <h1>{product?.productName}</h1>
      <p>{method}</p>
      <p>{quantity}</p>
      <p>{price}</p>
    </article>
  );
}
