import Link from 'next/link';

import styles from '../../styles/LandingPageAboutUs.module.scss';

export function ProductOverView() {
  return (
    <article className={styles.landingAboutUsContainer}>
      <div>
        <p>Nicaragua La Bendicion</p>
        <img src="/assets/teamPicFinal.png"></img>
      </div>
      <div></div>
    </article>
  );
}
