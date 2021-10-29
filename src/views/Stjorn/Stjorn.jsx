import React from "react";

import s from './Stjorn.module.scss';




export default function Stjorn() {


  return (

    <section className={s.one}>
      <div className={s.one__content}>
        <h1>
          Starfsemi
        </h1>
        	<div className={s.one__info}>
        	  <p>
        	      Náttúruverndarfélagið Skrauti var stofnað 14. febrúar 2021 að frumkvæði Snorra Baldurssonar. 
        	      Samtökin eru nefnd eftir fjallinu Skrauta í Vonarskarði. 
        	      Baráttumál þeirra fyrst í stað er friðlýsing landslagsheildar Vonarskarðs 
        	      sem náttúruvés í skilningi náttúruverndarlaga nr. 60/2013. 
        	      Með landslagsheild er átt við Vonarskarðsöskjuna milli Tungnafellsjökuls og Bárðarbungu að vestan og austan og milli upptakakvísla Skjálfandafljóts og Köldukvíslar að norðan og sunnan.
        	   </p>
        	</div>
          <div className = {s.one__stjorn}>
            <h2>
              Stjórn
            </h2>
            <ul>
              <li>Þuríður Helga Kristjánsdóttir, formaður</li>
              <li>Sigrún Helgadóttir, meðstjórnardi</li>
              <li>Ólafur Sigmar Andrésson, meðstjórnandi</li>
              <li>Kristján Baldursson, varamaður</li>
              <li>Stofnandi: Snorri Baldursson</li>
            </ul>
          </div>
        </div>
    </section>
  );
}
