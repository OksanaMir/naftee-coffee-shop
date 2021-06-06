import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export function ProductQuiz({ product, method, quantity }) {
  const { t } = useTranslation();

  const router = useRouter();
  const { productName, horizontalProductView, id, quantityWeight, taste } =
    product || {};
  const price = quantityWeight?.productData?.find(
    (it) => it?.weight === quantity
  )?.price;

  console.log("Product", product);
  console.log(productName);
  console.log(quantityWeight);

  return (
    <article>
      <>
        {horizontalProductView && (
          <Image
            src={horizontalProductView?.url}
            alt={horizontalProductView?.alt}
            width={horizontalProductView?.width}
            height={horizontalProductView?.height}
          />
        )}
        <p>metoda: {method}</p>
        <p>{quantity}g baleni</p>
        <p>{price} Kc</p>
        <Link href={`/shop/${id}`}>
          <a>Nakup</a>
        </Link>
      </>
    </article>
  );
}
