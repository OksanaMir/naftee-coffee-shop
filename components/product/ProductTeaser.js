import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from '../../styles/ProductTeaser.module.scss';
export function ProductTeaser({ data }) {
  const {
    productBanner,
    //  taste,
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
        <Image
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
        ></Image>
        {switchContent ? (
          <div>
            <h1>DETAIL</h1>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <h1>{productName}</h1>
        <h1>{price}</h1>
      </div>
    </div>
  );
}
