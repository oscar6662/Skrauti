import React from "react";

import s from './Index.module.scss';

export default function Index() {

  return (
    <>
      <section className = {s.index}>
      </section>
      <section className = {s.boxes}>
        <div>
          <img src = {require('../../assets/img/stjorn.jpg').default} alt = ""/>
          <a>
            Stórn og starfsemi
          </a>
          <p>
          Náttúruverndarfélagið Skrauti var stofnað 14. febrúar 2021 að frumkvæði Snorra Baldurssonar. Samtökin eru nefnd eftir fjallinu Skrauta í Vonarskarði.
          </p>
        </div>
        <div>
          <img src = {require('../../assets/img/obyggd.png').default}alt = ""/>
          <a>Óbyggð</a>
          <p>
          Slóð inn á Facebooksíðu Óbyggð, sem er víðernakortlagningarverkefni á vegum Náttúruverndarsamtaka Íslands, Samtaka um náttúruvernd á Norðurlandi, Skrauta, og Ungra umhverfissinna
          </p>
        </div>
        <div>
          <img src = {require('../../assets/img/greinar.jpg').default} alt = ""/>
          <a>
            Greinar og ítarefni
          </a>
          <p>
          Hér er hægt að finna ýmsar upplýsingar svo sem blaðagreinar og skýrslur um Vonarskarð og Vatnajökulsþjóðgarð.
          </p>
        </div>
      </section>
    </>
  );
}
