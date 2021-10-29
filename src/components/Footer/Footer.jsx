import React from "react";

import s from './footer.module.scss';

export default function Footer() {
  return (
    <>
      <div className={s.prefooter}>
        <ul>
          <li>
            Kennitala: 650221-0520
          </li>
          <li>
            0133-26-002338
          </li>
        </ul>
      </div>
      <div className={s.footer}>
        <div>
          <h1>
            Okkar samfélagsmiðlar
          </h1>
          <div className={s.footer__socials}>
            <a>
              <img src = {require('../../assets/img/f_logo_RGB-Black_58.png').default} alt = ""/>
            </a>
            <a>
              <img src = {require('../../assets/img/glyph-logo_May2016.png').default} alt = ""/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
