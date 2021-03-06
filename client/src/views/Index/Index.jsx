import React from "react";
import { Carousel } from "antd";

import s from './Index.module.scss';

export default function Index() {
  return (
    <>
      <Carousel autoplay effect="fade">
        <div className={`${s.banner} ${s.banner__one}`} >
          <div className={s.banner__title}><h1>Skrauti</h1><h1>Náttúruverndarfélag<p>.</p></h1></div>
        </div>
        <div className={`${s.banner} ${s.banner__two}`} >
          <div className={s.banner__title}><h1>Skrauti</h1><h1>Náttúruverndarfélag<p>.</p></h1></div>
        </div>
        <div className={`${s.banner} ${s.banner__three}`} >
          <div className={s.banner__title}><h1>Skrauti</h1><h1>Náttúruverndarfélag<p>.</p></h1></div>
        </div>
        <div className={`${s.banner} ${s.banner__four}`} >
          <div className={s.banner__title}><h1>Skrauti</h1><h1>Náttúruverndarfélag<p>.</p></h1></div>
        </div>
        <div className={`${s.banner} ${s.banner__five}`} >
          <div className={s.banner__title}><h1>Skrauti</h1><h1>Náttúruverndarfélag<p>.</p></h1></div>
        </div>
      </Carousel>

      <section className={s.three}>
        <div className={s.three__title}>
          <h1>Um okkur</h1>
        </div>
        <div className={s.three__boxes}>
          <div >
            <img src = {require('../../assets/img/stjorn.jpg').default} alt = ""/>
            <a href="/stjorn">
              Stjórn og starfsemi
            </a>
            <p>
            Náttúruverndarfélagið Skrauti var stofnað 14. febrúar 2021 að frumkvæði Snorra Baldurssonar. Samtökin eru nefnd eftir fjallinu Skrauta í Vonarskarði.
            </p>
          </div>
          <div>
            <img src = {require('../../assets/img/obyggd.png').default}alt = ""/>
            <a href="https://www.facebook.com/obyggdkortlagning">Óbyggð</a>
            <p>
            Slóð inn á Facebooksíðu Óbyggð, sem er víðernakortlagningarverkefni á vegum Náttúruverndarsamtaka Íslands, Samtaka um náttúruvernd á Norðurlandi, Skrauta, og Ungra umhverfissinna
            </p>
          </div>
          <div>
            <img src = {require('../../assets/img/greinar.jpg').default} alt = ""/>
            <a href="/greinar">
              Greinar og ítarefni
            </a>
            <p>
            Hér er hægt að finna ýmsar upplýsingar svo sem blaðagreinar og skýrslur um Vonarskarð og Vatnajökulsþjóðgarð.
            </p>
          </div>
        </div>
        
      </section>
    </>
  );
}
