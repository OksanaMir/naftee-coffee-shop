import Link from 'next/link';

import styles from '../../styles/LandingPageAboutUs.module.scss';

export function LandingPageAboutUs() {
  return (
    <article className={styles.landingAboutUsContainer}>
      <div>
        <p>
          We are here for your enjoyment from the multifaceted taste of the best
          varieties of specialty coffee. We share this feelings with the world
          around. Join us now.
        </p>
      </div>
      <div>
        <img src="/assets/aboutUs.jpg"></img>
      </div>
    </article>
  );
}
