import Image from 'next/image';
import { useState } from 'react';

import styles from '../../styles/ProductTeaser.module.scss';
export function ProductTeaser({ data }) {
  const {
    productBanner,
    //  taste,
    quantityWeight,
    horizontalProductView,
    price,
    // cuppingScoreRatingSca,
    productName,
  } = data ?? {};
  const [switchContent, setSwitchContent] = useState(false);
  const changeContent = () => {
    setSwitchContent(!switchContent);
  };
  return (
    <div className={styles.productTeaser}>
      <div
        className={styles.content}
        onMouseLeave={changeContent}
        onMouseEnter={changeContent}
        onClick={changeContent}
      >
          {horizontalProductView && <Image
              src={switchContent ? horizontalProductView?.url : productBanner?.url}
              alt={'product teaser'}
              width={
                  switchContent ? horizontalProductView?.width : productBanner?.width
              }
              height={
                  switchContent
                      ? horizontalProductView?.height
                      : productBanner?.height
              }
          />}

      </div>
      <div>
        <h1>{productName}</h1>
        <h1>{quantityWeight?.productData?.[1]?.price} Kč</h1>
      </div>
    </div>
  );
}
