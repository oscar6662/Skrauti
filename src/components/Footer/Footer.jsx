import React from "react";

import s from './footer.module.scss';

export default function Footer() {
  return (
    <>
      <div className={s.footer}>
        <div className={s.footer__content}>
          <div className={s.footer__left}>
            <ul>
              <li>
                Kennitala: 650221-0520
              </li>
              <li>
                0133-26-002338
              </li>
            </ul>
          </div>
          <div className={s.footer__right}>
            <ul>
              <li>
                skrauti@skrauti.is
              </li>
              <li>
                Facebook
              </li>
              <li>
                Instagram
              </li>
            </ul>
          </div>
        </div>
	    </div>
    </>
  );
}
