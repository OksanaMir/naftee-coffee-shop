import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingBasket,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { HeaderContent } from "./HeaderContent";
import { LangButton } from "../translations/LangButton";

import styles from "../../styles/Header.module.scss";
import { useRouter } from "next/router";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (event) => {
    // setLanguage(event.currentTarget.value === 'EN' ? 'en' : 'cs_CZ')
    console.log("button", event.currentTarget.value);
    // console.log(language, "lang")
    i18n
      .changeLanguage(event.currentTarget.value === "EN" ? "en" : "cs_CZ")
      .catch(console.error);
  };

  useEffect(() => {
    const wrapper = document.getElementById("snipcartShoppingBasket");
    console.log(wrapper, "wrapper");
    const summary = document.createElement("div");
    summary.className = "snipcart-summary";
    const count = document.createElement("div");
    count.className = "snipcart-items-count";
    wrapper.appendChild(summary).appendChild(count);
  }, [router.pathname]);

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <a>
              <img
                className={styles.logo}
                src="/assets/naftee_specialty_logo.png"
              />
            </a>
          </Link>
        </div>

        <div className={styles.navigation}>
          <div className={styles.navigationContent}>
            <HeaderContent headerClassName="headerDesktop" />
            <div className={styles.langSwitcher}>
              <div className={styles.btnContainer}>
                <LangButton changeLanguage={changeLanguage} language={"CZ"} />/
                <LangButton changeLanguage={changeLanguage} language={"EN"} />
              </div>
            </div>
            <div className={styles.shoppingBasket} id="snipcartShoppingBasket">
              <div className="snipcart-checkout">
                <FontAwesomeIcon icon={faShoppingBasket} color={"white"} />
              </div>
            </div>
          </div>
          {!showMenu ? (
            <div
              className={styles.burgerMenu}
              onClick={() => setShowMenu(!showMenu)}
            >
              <FontAwesomeIcon icon={faBars} color={"white"} />
            </div>
          ) : (
            <div
              className={styles.burgerMenu}
              onClick={() => setShowMenu(!showMenu)}
            >
              <FontAwesomeIcon icon={faTimes} color={"white"} />
            </div>
          )}
        </div>
      </header>
      {showMenu && (
        <HeaderContent
          headerClassName="headerMobile"
          setShowMenu={setShowMenu}
          showMenu={showMenu}
        />
      )}
    </>
  );
}
